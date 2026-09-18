import { CustomTooltip as ImsCustomTooltip } from 'ims-view-pc';
import { CommonComponentProps } from '../../interface';

const CustomTooltip = ({
  content,
  rows,
  expand,
  type,
  direction,
  styles,
}: CommonComponentProps) => {
  return (
    <div style={{ maxWidth: '100%', ...styles }}>
      <ImsCustomTooltip
        content={content}
        rows={rows !== null && rows !== undefined ? Number(rows) : 2}
        expand={!!expand}
        type={type || 'default'}
        direction={direction || 'default'}
      />
    </div>
  );
};

export default CustomTooltip;
