import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/editor';

const root = '<rootDir>/packages/editor';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
