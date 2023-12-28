---
title: 新增一个模块
order: 1
---

## 基础文件

- [参考链接-foo 下所有文件](https://github.com/eternallycyf/ims-monorepo-template/tree/master/packages/foo)

## TS: tsconfig.json 新增对应包路径

```json
{
  "paths": {
    "@ims-view/foo": ["./packages/foo/src"],
    "@ims-view/foo/*": ["./packages/foo/src/*"]
  }
}
```

## 配置 Jest

- `jest.config.base.ts` 中的 `moduleNameMapper` 参数:

```typescript
const config = {
  moduleNameMapper: {
    '@ims-view/foo': '<rootDir>/packages/foo/src',
  },
};
```

## 路径: alias

然后需要在 根目录的 `.dumirc` 文件中配置 `alias` 配置项

```ts
alias: {
  '@ims-view/foo': path.join(__dirname, './packages/foo/src'),
  '@ims-view/foo/src': path.join(__dirname, './packages/foo/src/*'),
},
```

## 文档: resolve

配置 xx 目录下自动解析 xxx.md 根目录的 `.dumirc` 文件中配置 `resolve` 配置项

```ts
resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'foo', dir: './packages/foo/src' },
    ],
},
```

## changelog

- `./docs/changelog/xxx.md`

```markdown
---
title: bar
nav:
  title: changelog
  order: 999
tocDepth: 2
---

<embed src="../../packages/bar/CHANGELOG.md"></embed>
```

## apiHeader

:::info{title='头部的提示'}
更新 `./package.json` 中的 `apiHeader` 替换为自己的主包(目前自动生成头部只能设置一个 其余需要手动在 xxx.md 上设置 ymal)
:::
