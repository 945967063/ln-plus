import{V as y,_ as b,c as U,a as f,w as _,b as s,d as l,r as B,o as I}from"./app.fa3b3eb2.js";const{defineComponent:S}=y,x=S({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:e,withCtx:a,createTextVNode:h,createElementVNode:D,Fragment:A,openBlock:i,createElementBlock:u}=y,g={style:{width:"100%",height:"500px"}};function C(n,t){const c=o("el-input"),p=o("el-form-item"),m=o("el-button"),r=o("el-form"),F=o("LImageBrowser");return i(),u(A,null,[e(r,{inline:!0},{default:a(()=>[e(p,null,{default:a(()=>[e(c,{modelValue:n.url,"onUpdate:modelValue":t[0]||(t[0]=E=>n.url=E),placeholder:"请输入切片地址"},null,8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(m,{type:"primary",onClick:n.submit},{default:a(()=>[h("确认")]),_:1},8,["onClick"])]),_:1})]),_:1}),D("div",g,[e(F,{ref:"lImageBrowser",hevcDecoderUrl:n.hevcDecoderUrl,hevcDecoderWasmUrl:n.hevcDecoderWasmUrl},null,8,["hevcDecoderUrl","hevcDecoderWasmUrl"])])],64)}const{defineComponent:w}=y,{onMounted:v,ref:d}=y;return{render:C,...w({setup(n,{expose:t}){t();const c=d("https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D"),p="https://945967063.github.io/ln-plus/hevc.js",m="https://945967063.github.io/ln-plus/hevc.wasm",r=d(),F=()=>{c.value&&(r.value.destroyViewer(),r.value.createViewer(c.value))};v(()=>{});const E={url:c,hevcDecoderUrl:p,hevcDecoderWasmUrl:m,lImageBrowser:r,submit:F,onMounted:v,ref:d};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}})}}()}}),W=JSON.parse('{"title":"阅片组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/TButton/base.md","lastUpdated":1683196858000}'),V=s("h1",{id:"阅片组件",tabindex:"-1"},[l("阅片组件 "),s("a",{class:"header-anchor",href:"#阅片组件","aria-hidden":"true"},"#")],-1),L=s("h3",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),k=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"el-form"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":inline"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"true"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"el-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"el-input"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"url"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"placeholder"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"请输入切片地址"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"el-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"el-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"el-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"submit"'),s("span",{style:{color:"#E1E4E8"}},">确认</"),s("span",{style:{color:"#85E89D"}},"el-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"el-form-item"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"el-form"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"{ width: '100%', height: '500px' }"`),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"LImageBrowser")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"lImageBrowser"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},":hevcDecoderUrl"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hevcDecoderUrl"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},":hevcDecoderWasmUrl"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"hevcDecoderWasmUrl"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"url"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#9ECBFF"}},"'https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"hevcDecoderUrl"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'https://945967063.github.io/ln-plus/hevc.js'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"hevcDecoderWasmUrl"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'https://945967063.github.io/ln-plus/hevc.wasm'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"lImageBrowser"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"submit"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"url.value) "),s("span",{style:{color:"#F97583"}},"return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  lImageBrowser.value."),s("span",{style:{color:"#B392F0"}},"destroyViewer"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  lImageBrowser.value."),s("span",{style:{color:"#B392F0"}},"createViewer"),s("span",{style:{color:"#E1E4E8"}},"(url.value)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// lImageBrowser.value &&")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//   lImageBrowser.value.createViewer(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//     'https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//   )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"el-form"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":inline"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"true"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"el-input"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"url"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"placeholder"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"请输入切片地址"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"el-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"submit"'),s("span",{style:{color:"#24292E"}},">确认</"),s("span",{style:{color:"#22863A"}},"el-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"el-form-item"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"el-form"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"{ width: '100%', height: '500px' }"`),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"LImageBrowser")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"lImageBrowser"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},":hevcDecoderUrl"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"hevcDecoderUrl"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},":hevcDecoderWasmUrl"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"hevcDecoderWasmUrl"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"url"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#032F62"}},"'https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"hevcDecoderUrl"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'https://945967063.github.io/ln-plus/hevc.js'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"hevcDecoderWasmUrl"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'https://945967063.github.io/ln-plus/hevc.wasm'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"lImageBrowser"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"submit"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"url.value) "),s("span",{style:{color:"#D73A49"}},"return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  lImageBrowser.value."),s("span",{style:{color:"#6F42C1"}},"destroyViewer"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  lImageBrowser.value."),s("span",{style:{color:"#6F42C1"}},"createViewer"),s("span",{style:{color:"#24292E"}},"(url.value)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// lImageBrowser.value &&")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//   lImageBrowser.value.createViewer(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//     'https://web-rcp-image.oss-cn-shenzhen.aliyuncs.com/Slice/07be0fd1-cd15-40f4-94c8-5483406c2ade20221119_144132_18_18.sdpc?Expires=1684869321&OSSAccessKeyId=LTAI5tE49rrKU9iAxwDdzMcD&Signature=4DCA2U%2F5RhAGi%2FDlL2SrFiteDhs%3D'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//   )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"})])])],-1);function z(o,e,a,h,D,A){const i=B("render-demo-0"),u=B("demo");return I(),U("div",null,[V,L,f(u,{customClass:"demoblock-custom",sourceCode:`<template>
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
<\/script>
`},{highlight:_(()=>[k]),default:_(()=>[f(i)]),_:1})])}const T=b(x,[["render",z]]);export{W as __pageData,T as default};
