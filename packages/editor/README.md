# @ims-view/editor

基于拖拽的低代码页面编辑器

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

## 安装

```bash
pnpm i @ims-view/editor antd @ant-design/icons
```

## 使用

```tsx
import { Editor } from '@ims-view/editor';

export default () => <Editor style={{ height: '100vh' }} />;
```

## 能力

- 物料 / 大纲 / 源码三栏
- 基础物料：Page / Container / Button / Modal / Table / Form
- ims-view-pc 物料：SectionTitle / CustomTag / Icon / WaterMark / CustomTooltip
- 属性、样式（含 CSS 编辑）、事件动作（跳转 / 消息 / 自定义 JS / 组件方法）
- 编辑 ↔ 预览

## License

[MIT](../../LICENSE) ® eternallycyf

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/@ims-view/editor.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@ims-view/editor
[download-image]: https://img.shields.io/npm/dm/@ims-view/editor.svg
[download-url]: https://npmjs.org/package/@ims-view/editor
