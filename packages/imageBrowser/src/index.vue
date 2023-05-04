<template>
  <div id="image-browser">
    <div id="image-browser-main"></div>
    <div id="image-browser-navigator"></div>
  </div>
</template>

<script lang="ts">
/**
 * 阅片组件
 */

import OpenSeadragon from 'openseadragon'
import { Sdpc } from 'sdpc-web-ts'
import { PicHead } from 'sdpc-web-ts/dist/src/sdpc/picHead'
import { SliceSource } from 'sdpc-web-ts/dist/src/sdpc/sdpc'
import {
  computed,
  defineComponent,
  onUnmounted,
  PropType,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue'
export default defineComponent({
  name: 'ImageBrowser',
  props: {
    options: {
      //openseadragon设置
      type: Object as PropType<OpenSeadragon.Options>,
      default: {},
    },
    //hevc解码器所在地址
    hevcDecoderUrl: {
      type: String,
      required: true,
    },
    //hevc解码器所在地址
    hevcDecoderWasmUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { options, hevcDecoderUrl, hevcDecoderWasmUrl } = toRefs(props)
    const picHead: Ref<null | PicHead> = ref(null)
    const viewer: Ref<OpenSeadragon.Viewer | null> = ref(null) //openSeadragon查看器类
    let sdpc = ref(null) as unknown as Ref<Sdpc>
    //openSeadragon视图类
    const viewPort = computed(() => {
      return viewer.value?.viewport
    })
    const LoadingCompletedOrNot = ref(false)
    const InitializeViewerState = ref(true)
    //3d标注系数
    const registration3D: Ref<number> = ref(1)
    //默认设置
    let defaultOptions: OpenSeadragon.Options = {
      id: 'image-browser-main',
      prefixUrl: '/openseadragon/',
      navigatorId: 'image-browser-navigator',
      navigatorAutoResize: true, //导航器大小自动调整
      showNavigator: true, //显示导航图
      placeholderFillStyle: '#f3f3f3', //初始化时，图片未载入现实的样式，默认是白色
      debugGridColor: ['#000000'],
      minZoomImageRatio: 1,
      // maxZoomPixelRatio: 1,
      smoothTileEdgesMinZoom: Infinity,
      zoomPerScroll: 2, //滚轮放大倍率
      navigatorOpacity: 1, //导航图透明度
      showZoomControl: false, //不显示放大按钮
      showHomeControl: false, //显示主页按钮
      showFullPageControl: false, //
      gestureSettingsMouse: {
        clickToZoom: false,
      },
      preserveImageSizeOnResize: true,

      visibilityRatio: 0.5,
      collectionMode: true,
      immediateRender: true,
      // debugMode: true,
      iOSDevice: true,

      // autoResize: false,
    }

    //isFrozen是否为插件冰冻转发
    async function refreshViewer(url: any) {
      destroyViewer()
      createViewer(url as SliceSource)
    }
    async function createViewer(
      slideUrl: SliceSource
    ): Promise<OpenSeadragon.Viewer | undefined> {
      sdpc.value = new Sdpc(
        slideUrl,
        hevcDecoderUrl.value,
        hevcDecoderWasmUrl.value
      )
      try {
        if (!sdpc.value.isLoadDecoder) {
          await sdpc.value.loadDecoder()
        }
        const result = await sdpc.value.getPicHead()
        const results = await Promise.all([
          sdpc.value.getMacroLabelImageUrl(),
          sdpc.value.getMacroPathologicalImageUrl(),
        ])
        if (result) {
          picHead.value = result
          await sdpc.value.getExtraInfo()
          // registration3D.value = parseInt(result.ruler)
          setRegistration3D(result.ruler, result.rate)
          const openSeadragonOptions = await intOption()
          // console.log("openSeadragonOptions",openSeadragonOptions);

          viewer.value = OpenSeadragon(openSeadragonOptions)
          if (viewer.value) {
            console.log(viewer.value, '1212112')

            /**
             * https://github.com/openseadragon/openseadragon/issues/1970
             * 图片加载失败，重新加载图片
             * */
            viewer.value.addHandler('tile-load-failed', (ev) => {
              console.log('!!!', ev)

              setTimeout(function () {
                if (ev.tile) {
                  ev.tile.exists = true
                }
              }, 1)
            })
            defaultOptions.showNavigator = true
            viewer.value.addOnceHandler(
              'open',
              async (ev: any) => {
                if (!InitializeViewerState.value) {
                  destroyViewer()
                }
                console.log('open+++++++++++++++++++', viewer.value?.addHandler)

                defaultOptions.showNavigator = true
                LoadingCompletedOrNot.value = true
              },
              undefined,
              10000
            )
            viewer.value.addHandler('open-failed', (ev: any) => {
              // console.log(ev);
              defaultOptions.showNavigator = true
            })
          }
          return viewer.value
        }
      } catch (error) {
        console.log(error)
        destroyViewer()
        // alert(
        //   "未能正确加载切片，请确保网络正常和上传的切片格式正确,暂时只支持sdpc格式切片"
        // );
      }
    }

    //根据3d系数进行缩放转换
    function setRegistration3D(ruler: number, rate: number) {
      const Mpp3D = 0.242797 // 分辨率
      const Rate3D = 20 //扫描倍率
      const Scale3D = 0.242797 / 0.5 //分辨率 0.242797um/pixel, 100pixels = 50um 映射比例
      registration3D.value = (ruler / Mpp3D) * Scale3D * (rate / Rate3D)
    }

    //销毁视图
    async function destroyViewer() {
      LoadingCompletedOrNot.value = false
      if (viewer.value && viewer.value.destroy) {
        if (viewer.value.navigator) {
          viewer.value.navigator.destroy()
        }
        if (sdpc.value.sdpcWs) {
          console.log('进入sdpcWs')
          sdpc.value.decodeHevc.dispose()
          sdpc.value = null as any
        }
        // sdpc.value.disposeTable()
        viewer.value.destroy()
        viewer.value = null
        InitializeViewerState.value = true
      } else {
        if (sdpc.value) {
          if (sdpc.value.sdpcWs) {
            console.log('进入sdpcWs', sdpc.value)
            // sdpcWs.value?.dispose()
            // sdpc.value.disposeTable()
            sdpc.value.decodeHevc.dispose()
            sdpc.value = null as any
            InitializeViewerState.value = true
          } else {
            InitializeViewerState.value = false
            // Startws(url, isFrozen, WebSocketUrl)
          }
        }
      }
      LoadingCompletedOrNot.value = false
      console.log('销毁完毕—')
    }

    // function destroyViewer() {
    //     LoadingCompletedOrNot.value = false
    //     if (viewer.value && viewer.value.destroy) {
    //         if (viewer.value.navigator) {
    //             viewer.value.navigator.destroy()
    //         }
    //         // sdpc.value.disposeTable()
    //         viewer.value.destroy()
    //         InitializeViewerState.value = true
    //     }
    // }
    //获取瓦片的url
    async function getTileUrl(
      level: number,
      x: number,
      y: number
    ): Promise<string> {
      const url = await sdpc.value.getTileUrl(level, x, y)
      return url
    }

    //初始化设置
    async function intOption(): Promise<OpenSeadragon.Options> {
      console.log(options.value, '122')

      const openSeadragonOptions = Object.assign(
        {},
        defaultOptions,
        { maxZoomPixelRatio: 2 * registration3D.value }, //放大的最大倍率
        options.value
      )
      await setTileSources(openSeadragonOptions)
      setImageJob()
      return openSeadragonOptions
    }

    //设置tileSource,设置切片，瓦片的大小
    async function setTileSources(openSeadragonOptions: OpenSeadragon.Options) {
      await sdpc.value.getPicInfo()
      const tile = await sdpc.value.getTileOption()

      openSeadragonOptions.minPixelRatio = tile.scale //默认为0.5 需根据切片倍率设置 最小像素比.值越小，清晰度越高，体积越大
      const maxLevel = tile.level - 1
      console.log(tile, 'tile')

      openSeadragonOptions.tileSources = {
        tileWidth: tile.width, //瓦块宽高
        tileHeight: tile.height,
        height: tile.srcHeight, //切片整体宽高
        width: tile.srcWidth,
        maxLevel: maxLevel,
        minLevel: 0,
        getTileUrl: function (level: any, x: any, y: any) {
          return JSON.stringify({ level: maxLevel - level, x, y })
        },
      }
      //       console.log(
      //         openSeadragonOptions,
      //         openSeadragonOptions.minPixelRatio
      // )
      await setLevelScale(
        openSeadragonOptions,
        openSeadragonOptions.minPixelRatio
      )
    }

    /**
     * https://github.com/openseadragon/openseadragon/issues/1922
     * 重写缩放比处理逻辑
     * 根据不同倍率切片动态传值
     * 切片默认倍率为0.5
     * */
    function setLevelScale(
      openSeadragonOptions: OpenSeadragon.Options,
      ratio: number = 0.5
    ) {
      ;(openSeadragonOptions.tileSources as any).getLevelScale = function (
        level: number
      ): any {
        const levelScaleCache: { [key: number]: number } = {}
        let i
        for (i = 0; i <= this.maxLevel; i++) {
          levelScaleCache[i] = 1 / Math.pow(1 / ratio, this.maxLevel - i)
        }
        this.getLevelScale = function (_level: number) {
          return levelScaleCache[_level]
        }
        return this.getLevelScale(level)
      }
    }

    /**
     * https://github.com/openseadragon/openseadragon/issues/1707
     * 重写图片的加载规则
     * 异步加载
     * */
    function setImageJob() {
      ;(OpenSeadragon as any).ImageJob.prototype.start = async function () {
        try {
          let self = this
          await loadImage(self)
        } catch (error) {}
      }

      function loadImage(_this: any, count: number = 1000) {
        return new Promise(async (resolve, reject) => {
          if (count > 0) {
            // console.log('加载图片', 'count', count)

            const self = _this
            console.log(self, 'self')

            const { level, x, y } = JSON.parse(self.src) //需要tileSources.getTileUrl方法转换返回src的格式
            let url = await getTileUrl(level, x, y)
            self.image = new Image()
            self.image.onload = function () {
              URL.revokeObjectURL(self.image.src)
              self.finish(true)
            }
            self.image.onabort = self.image.onerror = async function (
              err: any
            ) {
              URL.revokeObjectURL(self.image.src)
              count -= 1
              await loadImage(_this, count)
            }
            self.jobId = window.setTimeout(function () {
              self.errorMsg =
                'Image load exceeded timeout (' + self.timeout + ' ms)'
              self.finish(false)
            }, self.timeout)
            if (url) {
              self.image.src = url
              resolve(true)
            } else {
              count -= 1
              await loadImage(_this, count)
            }
          }
        })
      }
    }

    //销毁组件
    onUnmounted(() => {
      destroyViewer()
    })

    return {
      createViewer,
      destroyViewer,
      refreshViewer,
      sdpc,
      viewer,
      viewPort,
      picHead,
      registration3D,
      LoadingCompletedOrNot,
    }
  },
})
</script>
<style scoped lang="scss">
#image-browser {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  #image-browser-main {
    height: 100%;
    width: 100%;
  }

  // #image-browser-navigator {
  //     position: absolute !important;
  //     z-index: 9;
  //     width: 211px;
  //     height: 201px;
  //     top: 19px;
  //     left: 25px;
  //     border: 1px solid red;
  // }
}
@media screen and (max-width: 768px) {
  #image-browser-navigator {
    position: absolute !important;
    z-index: 9;
    width: 100px;
    height: 100px;
    top: 19px;
    left: 25px;
    border: 1px solid red;
  }
}
//大于768px
@media screen and (min-width: 768px) {
  #image-browser-navigator {
    position: absolute !important;
    z-index: 9;
    width: 211px;
    height: 201px;
    top: 19px;
    left: 25px;
    border: 1px solid red;
  }
}
</style>
