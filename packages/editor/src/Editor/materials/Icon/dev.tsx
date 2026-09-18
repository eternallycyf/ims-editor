import { Icon as ImsIcon } from 'ims-view-pc';
import { useDrag } from 'react-dnd';
import { CommonComponentProps } from '../../interface';

const Icon = ({ id, type, spin, rotate, styles }: CommonComponentProps) => {
  const [, drag] = useDrag({
    type: 'Icon',
    item: {
      type: 'Icon',
      dragType: 'move',
      id,
    },
  });

  return (
    <span ref={drag} data-component-id={id} style={{ display: 'inline-block', ...styles }}>
      <ImsIcon
        type={type}
        spin={!!spin}
        rotate={rotate ? Number(rotate) : undefined}
        style={styles}
      />
    </span>
  );
};

export default Icon;
