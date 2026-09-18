import { WaterMark as ImsWaterMark } from 'ims-view-pc';
import { useDrag } from 'react-dnd';
import { CommonComponentProps } from '../../interface';

const WaterMark = ({
  id,
  content,
  rotate,
  fillStyle,
  font,
  styles,
  children,
}: CommonComponentProps) => {
  const [, drag] = useDrag({
    type: 'WaterMark',
    item: {
      type: 'WaterMark',
      dragType: 'move',
      id,
    },
  });

  return (
    <div
      ref={drag}
      data-component-id={id}
      style={{
        position: 'relative',
        minHeight: 120,
        width: '100%',
        border: '1px dashed #d9d9d9',
        ...styles,
      }}
    >
      <ImsWaterMark
        content={content}
        rotate={rotate !== null && rotate !== undefined ? Number(rotate) : -20}
        fillStyle={fillStyle}
        font={font}
      >
        <div style={{ minHeight: 120, padding: 16 }}>{children || '水印容器'}</div>
      </ImsWaterMark>
    </div>
  );
};

export default WaterMark;
