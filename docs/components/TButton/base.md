# 阅片组件

### 基础用法

:::demo

```vue
<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input v-model="url" placeholder="请输入切片地址" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">确认</el-button>
    </el-form-item>
  </el-form>
  <div :style="{ width: '100%', height: '500px' }">
    <LImageBrowser
      ref="lImageBrowser"
      :hevcDecoderUrl="hevcDecoderUrl"
      :hevcDecoderWasmUrl="hevcDecoderWasmUrl"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const url = ref(
  'https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D'
)
const hevcDecoderUrl = 'https://945967063.github.io/ln-plus/hevc.js'
const hevcDecoderWasmUrl = 'https://945967063.github.io/ln-plus/hevc.wasm'
const lImageBrowser = ref()
const submit = () => {
  if (!url.value) return
  lImageBrowser.value.destroyViewer()
  lImageBrowser.value.createViewer(url.value)
}
onMounted(() => {
  // lImageBrowser.value &&
  //   lImageBrowser.value.createViewer(
  //     'https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D'
  //   )
})
</script>
```

:::
