import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LowcodeEditor from './LowcodeEditor';
import './index.less';

export interface EditorProps {
  /** 自定义 className */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const Editor: React.FC<EditorProps> = (props) => {
  const { className, style } = props;

  return (
    <div className={className} style={{ height: '100%', ...style }}>
      <DndProvider backend={HTML5Backend}>
        <LowcodeEditor />
      </DndProvider>
    </div>
  );
};

export default Editor;
export type { ActionConfig } from './components/Setting/ActionModal';
export type { CommonComponentProps } from './interface';
export { useComponentConfigStore } from './stores/component-config';
export type {
  ComponentConfig,
  ComponentEvent,
  ComponentMethod,
  ComponentSetter,
} from './stores/component-config';
export { getComponentById, useComponetsStore } from './stores/components';
export type { Component } from './stores/components';
export { LowcodeEditor };
