import { Segmented } from 'antd';
import { useState } from 'react';
import { Material } from '../Material';
import { Outline } from '../Outline';
import { Source } from '../Source';

export function MaterialWrapper() {
  const [key, setKey] = useState<string>('物料');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Segmented value={key} onChange={setKey} block options={['物料', '大纲', '源码']} />
      <div className="pt-[20px]" style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        {key === '物料' && <Material />}
        {key === '大纲' && <Outline />}
        {key === '源码' && <Source />}
      </div>
    </div>
  );
}
