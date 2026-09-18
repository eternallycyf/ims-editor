import { create } from 'zustand';
import ButtonDev from '../materials/Button/dev';
import ButtonProd from '../materials/Button/prod';
import ContainerDev from '../materials/Container/dev';
import ContainerProd from '../materials/Container/prod';
import CustomTagDev from '../materials/CustomTag/dev';
import CustomTagProd from '../materials/CustomTag/prod';
import CustomTooltipDev from '../materials/CustomTooltip/dev';
import CustomTooltipProd from '../materials/CustomTooltip/prod';
import FormDev from '../materials/Form/dev';
import FormProd from '../materials/Form/prod';
import FormItemDev from '../materials/FormItem/dev';
import FormItemProd from '../materials/FormItem/prod';
import IconDev from '../materials/Icon/dev';
import IconProd from '../materials/Icon/prod';
import ModalDev from '../materials/Modal/dev';
import ModalProd from '../materials/Modal/prod';
import PageDev from '../materials/Page/dev';
import PageProd from '../materials/Page/prod';
import SectionTitleDev from '../materials/SectionTitle/dev';
import SectionTitleProd from '../materials/SectionTitle/prod';
import TableDev from '../materials/Table/dev';
import TableProd from '../materials/Table/prod';
import TableColumnDev from '../materials/TableColumn/dev';
import TableColumnProd from '../materials/TableColumn/prod';
import WaterMarkDev from '../materials/WaterMark/dev';
import WaterMarkProd from '../materials/WaterMark/prod';

export interface ComponentSetter {
  name: string;
  label: string;
  type: string;
  [key: string]: any;
}

export interface ComponentEvent {
  name: string;
  label: string;
}

export interface ComponentMethod {
  name: string;
  label: string;
}

export interface ComponentConfig {
  name: string;
  defaultProps: Record<string, any>;
  desc: string;
  setter?: ComponentSetter[];
  stylesSetter?: ComponentSetter[];
  events?: ComponentEvent[];
  methods?: ComponentMethod[];
  dev: any;
  prod: any;
}

interface State {
  componentConfig: { [key: string]: ComponentConfig };
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>((set) => ({
  componentConfig: {
    Container: {
      name: 'Container',
      defaultProps: {},
      desc: '容器',
      dev: ContainerDev,
      prod: ContainerProd,
    },
    Button: {
      name: 'Button',
      defaultProps: {
        type: 'primary',
        text: '按钮',
      },
      setter: [
        {
          name: 'type',
          label: '按钮类型',
          type: 'select',
          options: [
            { label: '主按钮', value: 'primary' },
            { label: '次按钮', value: 'default' },
          ],
        },
        {
          name: 'text',
          label: '文本',
          type: 'input',
        },
      ],
      stylesSetter: [
        {
          name: 'width',
          label: '宽度',
          type: 'inputNumber',
        },
        {
          name: 'height',
          label: '高度',
          type: 'inputNumber',
        },
      ],
      events: [
        {
          name: 'onClick',
          label: '点击事件',
        },
        {
          name: 'onDoubleClick',
          label: '双击事件',
        },
      ],
      desc: '按钮',
      dev: ButtonDev,
      prod: ButtonProd,
    },
    Modal: {
      name: 'Modal',
      defaultProps: {
        title: '弹窗',
      },
      setter: [
        {
          name: 'title',
          label: '标题',
          type: 'input',
        },
      ],
      stylesSetter: [],
      events: [
        {
          name: 'onOk',
          label: '确认事件',
        },
        {
          name: 'onCancel',
          label: '取消事件',
        },
      ],
      methods: [
        {
          name: 'open',
          label: '打开弹窗',
        },
        {
          name: 'close',
          label: '关闭弹窗',
        },
      ],
      desc: '弹窗',
      dev: ModalDev,
      prod: ModalProd,
    },
    Page: {
      name: 'Page',
      defaultProps: {},
      desc: '页面',
      dev: PageDev,
      prod: PageProd,
    },
    Table: {
      name: 'Table',
      defaultProps: {},
      desc: '表格',
      setter: [
        {
          name: 'url',
          label: 'url',
          type: 'input',
        },
      ],
      dev: TableDev,
      prod: TableProd,
    },
    TableColumn: {
      name: 'TableColumn',
      desc: '表格列',
      defaultProps: {
        dataIndex: `col_${new Date().getTime()}`,
        title: '列名',
      },
      setter: [
        {
          name: 'type',
          label: '类型',
          type: 'select',
          options: [
            {
              label: '文本',
              value: 'text',
            },
            {
              label: '日期',
              value: 'date',
            },
          ],
        },
        {
          name: 'title',
          label: '标题',
          type: 'input',
        },
        {
          name: 'dataIndex',
          label: '字段',
          type: 'input',
        },
      ],
      dev: TableColumnDev,
      prod: TableColumnProd,
    },
    Form: {
      name: 'Form',
      defaultProps: {},
      desc: '表单',
      setter: [
        {
          name: 'title',
          label: '标题',
          type: 'input',
        },
      ],
      events: [
        {
          name: 'onFinish',
          label: '提交事件',
        },
      ],
      methods: [
        {
          name: 'submit',
          label: '提交',
        },
      ],
      dev: FormDev,
      prod: FormProd,
    },
    FormItem: {
      name: 'FormItem',
      desc: '表单项',
      defaultProps: {
        name: new Date().getTime(),
        label: '姓名',
      },
      dev: FormItemDev,
      prod: FormItemProd,
      setter: [
        {
          name: 'type',
          label: '类型',
          type: 'select',
          options: [
            {
              label: '文本',
              value: 'input',
            },
            {
              label: '日期',
              value: 'date',
            },
          ],
        },
        {
          name: 'label',
          label: '标题',
          type: 'input',
        },
        {
          name: 'name',
          label: '字段',
          type: 'input',
        },
        {
          name: 'rules',
          label: '校验',
          type: 'select',
          options: [
            {
              label: '必填',
              value: 'required',
            },
          ],
        },
      ],
    },
    SectionTitle: {
      name: 'SectionTitle',
      desc: '区块标题',
      defaultProps: {
        title: '区块标题',
        tooltip: '',
        showPrefixBar: true,
      },
      setter: [
        { name: 'title', label: '标题', type: 'input' },
        { name: 'tooltip', label: '提示', type: 'input' },
        {
          name: 'showPrefixBar',
          label: '左侧竖条',
          type: 'select',
          options: [
            { label: '显示', value: true },
            { label: '隐藏', value: false },
          ],
        },
      ],
      stylesSetter: [{ name: 'width', label: '宽度', type: 'inputNumber' }],
      dev: SectionTitleDev,
      prod: SectionTitleProd,
    },
    CustomTag: {
      name: 'CustomTag',
      desc: '标签',
      defaultProps: {
        label: '标签',
        color: 'blue',
        showDot: true,
        tooltip: '',
      },
      setter: [
        { name: 'label', label: '文案', type: 'input' },
        {
          name: 'color',
          label: '颜色',
          type: 'select',
          options: [
            { label: 'magenta', value: 'magenta' },
            { label: 'volcano', value: 'volcano' },
            { label: 'orange', value: 'orange' },
            { label: 'gold', value: 'gold' },
            { label: 'lime', value: 'lime' },
            { label: 'green', value: 'green' },
            { label: 'cyan', value: 'cyan' },
            { label: 'blue', value: 'blue' },
            { label: 'geekblue', value: 'geekblue' },
            { label: 'purple', value: 'purple' },
            { label: 'red', value: 'red' },
          ],
        },
        {
          name: 'showDot',
          label: '圆点',
          type: 'select',
          options: [
            { label: '显示', value: true },
            { label: '隐藏', value: false },
          ],
        },
        { name: 'tooltip', label: '提示', type: 'input' },
      ],
      dev: CustomTagDev,
      prod: CustomTagProd,
    },
    Icon: {
      name: 'Icon',
      desc: '图标',
      defaultProps: {
        type: 'icon-shezhi',
        spin: false,
        rotate: 0,
      },
      setter: [
        {
          name: 'type',
          label: '图标',
          type: 'select',
          options: [
            { label: '设置', value: 'icon-shezhi' },
            { label: '下载', value: 'icon-xiazai' },
            { label: '上传', value: 'icon-shangchuan' },
            { label: '信息', value: 'icon-xinxi' },
            { label: '收藏', value: 'icon-shoucang' },
            { label: '全屏', value: 'icon-quanping' },
            { label: '更多', value: 'icon-gengduo' },
          ],
        },
        {
          name: 'spin',
          label: '旋转',
          type: 'select',
          options: [
            { label: '否', value: false },
            { label: '是', value: true },
          ],
        },
        { name: 'rotate', label: '角度', type: 'input' },
      ],
      stylesSetter: [{ name: 'fontSize', label: '字号', type: 'inputNumber' }],
      dev: IconDev,
      prod: IconProd,
    },
    WaterMark: {
      name: 'WaterMark',
      desc: '水印',
      defaultProps: {
        content: '水印',
        rotate: -20,
        fillStyle: 'rgba(184, 184, 184, 0.6)',
        font: '18px Microsoft Yahei',
      },
      setter: [
        { name: 'content', label: '文案', type: 'input' },
        { name: 'rotate', label: '旋转角', type: 'input' },
        { name: 'fillStyle', label: '颜色', type: 'input' },
        { name: 'font', label: '字体', type: 'input' },
      ],
      stylesSetter: [
        { name: 'height', label: '高度', type: 'inputNumber' },
        { name: 'width', label: '宽度', type: 'inputNumber' },
      ],
      dev: WaterMarkDev,
      prod: WaterMarkProd,
    },
    CustomTooltip: {
      name: 'CustomTooltip',
      desc: '文本省略',
      defaultProps: {
        content:
          '这是一段用于展示省略与展开的示例文本，拖入画布即可预览效果。拖拽到页面或容器中查看。',
        rows: 2,
        expand: true,
        type: 'default',
        direction: 'default',
      },
      setter: [
        { name: 'content', label: '内容', type: 'input' },
        { name: 'rows', label: '行数', type: 'input' },
        {
          name: 'expand',
          label: '可展开',
          type: 'select',
          options: [
            { label: '是', value: true },
            { label: '否', value: false },
          ],
        },
        {
          name: 'type',
          label: '按钮风格',
          type: 'select',
          options: [
            { label: '默认', value: 'default' },
            { label: '简洁', value: 'simple' },
            { label: '自定义', value: 'custom' },
          ],
        },
        {
          name: 'direction',
          label: '按钮位置',
          type: 'select',
          options: [
            { label: '默认', value: 'default' },
            { label: '右侧', value: 'right' },
          ],
        },
      ],
      stylesSetter: [{ name: 'width', label: '宽度', type: 'inputNumber' }],
      dev: CustomTooltipDev,
      prod: CustomTooltipProd,
    },
  },
  registerComponent: (name, componentConfig) =>
    set((state) => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig,
        },
      };
    }),
}));
