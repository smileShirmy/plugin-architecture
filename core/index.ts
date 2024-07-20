import { Core } from './Core'

/**
 * 导出 CustomOptions 和 CustomAPI 给插件通过 declare module 实现接口合并
 */
export type { CoreInstance } from './instance'
export type { Options, CustomOptions } from './Options'
export { createCore, type CustomAPI } from './Core'

export default Core
