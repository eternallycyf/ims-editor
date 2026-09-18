import { WaterMark as ImsWaterMark } from 'ims-view-pc';
import { CommonComponentProps } from '../../interface';

const WaterMark = ({
  content,
  rotate,
  fillStyle,
  font,
  styles,
  children,
}: CommonComponentProps) => {
  return (
    <div style={{ position: 'relative', minHeight: 120, width: '100%', ...styles }}>
      <ImsWaterMark
        content={content}
        rotate={rotate !== null && rotate !== undefined ? Number(rotate) : -20}
        fillStyle={fillStyle}
        font={font}
      >
        <div style={{ minHeight: 120, padding: 16 }}>{children}</div>
      </ImsWaterMark>
    </div>
  );
};

export default WaterMark;
