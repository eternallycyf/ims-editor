import { CustomTooltip as ImsCustomTooltip } from 'ims-view-pc';
import { useDrag } from 'react-dnd';
import { CommonComponentProps } from '../../interface';

const CustomTooltip = ({
  id,
  content,
  rows,
  expand,
  type,
  direction,
  styles,
}: CommonComponentProps) => {
  const [, drag] = useDrag({
    type: 'CustomTooltip',
    item: {
      type: 'CustomTooltip',
      dragType: 'move',
      id,
    },
  });

  return (
    <div ref={drag} data-component-id={id} style={{ maxWidth: '100%', ...styles }}>
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
