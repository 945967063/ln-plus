### 快速上手

::: tip 提示

l-n-plus 基于 vue3 + ts + Element-plus 再次封装的基础组件

:::

### 安装

```bash:no-line-numbers
npm install l-n-plus -S
&
pnpm install l-n-plus -S
&
yarn add l-n-plus -S
```

### 使用

```js
// main.ts
import LNPlus from 'l-n-plus'
import 'l-n-plus/lib/style.css'
const app = createApp(App)
app.use(LNPlus)
app.mount('#app')
```
