---
title: 使用方式
order: 0
nav:
  title: editor
  order: 4
apiHeader: false
---

## 使用方式

### install

```shell
pnpm i @ims-view/editor antd @ant-design/icons
```

### 基础用法

```tsx
import { Editor } from '@ims-view/editor';
import 'allotment/dist/style.css'; // 若按需引入样式

export default () => <Editor style={{ height: '100vh' }} />;
```

### 能力概览

- 左侧：物料 / 大纲 / 源码
- 中间：拖拽画布（Page / Container / Button / Modal / Table / Form）
- ims-view-pc 物料：SectionTitle / CustomTag / Icon / WaterMark / CustomTooltip
- 右侧：属性 / 样式 / 事件（跳转、消息、自定义 JS、组件方法）
- 顶部：编辑 ↔ 预览
