import { CustomTag as ImsCustomTag } from 'ims-view-pc';
import { useDrag } from 'react-dnd';
import { CommonComponentProps } from '../../interface';

const CustomTag = ({ id, label, color, showDot, tooltip, styles }: CommonComponentProps) => {
  const [, drag] = useDrag({
    type: 'CustomTag',
    item: {
      type: 'CustomTag',
      dragType: 'move',
      id,
    },
  });

  return (
    <span ref={drag} data-component-id={id} style={{ display: 'inline-block', ...styles }}>
      <ImsCustomTag
        label={label}
        color={color}
        showDot={showDot !== false}
        tooltip={tooltip || undefined}
      />
    </span>
  );
};

export default CustomTag;
