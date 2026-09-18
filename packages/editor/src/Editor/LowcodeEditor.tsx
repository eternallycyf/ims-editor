import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import React from 'react';
import { EditArea } from './components/EditArea';
import { Header } from './components/Header';
import { MaterialWrapper } from './components/MaterialWrapper';
import { Preview } from './components/Preivew';
import { Setting } from './components/Setting';
import { useComponetsStore } from './stores/components';

export default function LowcodeEditor() {
  const { mode } = useComponetsStore();

  return (
    <div className="flex flex-col ims-lowcode-editor" style={{ height: '100%' }}>
      <div
        className="h-[60px] flex items-center border-b-[1px] border-[#000]"
        style={{ flexShrink: 0 }}
      >
        <Header />
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        {mode === 'edit' ? (
          <Allotment>
            <Allotment.Pane preferredSize={240} maxSize={400} minSize={200}>
              <MaterialWrapper />
            </Allotment.Pane>
            <Allotment.Pane>
              <EditArea />
            </Allotment.Pane>
            <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
              <Setting />
            </Allotment.Pane>
          </Allotment>
        ) : (
          <Preview />
        )}
      </div>
    </div>
  );
}
