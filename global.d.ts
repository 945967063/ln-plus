import ImageBrowser from './packages/imageBrowser'

declare module '@avue/runtime-core' {
  export interface GlobalComponents {
    ImageBrowser: typeof ImageBrowser
  }
}
