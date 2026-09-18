import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib',
    platform: 'browser',
    ignores: ['src/**/demo/**'],
  },
  esm: {
    output: 'es',
    ignores: ['src/**/demo/**'],
  },
  umd: {
    output: 'dist',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd',
      'ims-view-pc': 'imsViewPc',
      '@ant-design/icons': 'icons',
      allotment: 'Allotment',
      zustand: 'zustand',
      'react-dnd': 'ReactDnD',
      'react-dnd-html5-backend': 'ReactDnDHTML5Backend',
      '@monaco-editor/react': 'MonacoEditor',
      axios: 'axios',
      dayjs: 'dayjs',
      lodash: '_',
      'style-to-object': 'styleToObject',
    },
  },
  extraBabelPlugins: ['add-module-exports'],
});
