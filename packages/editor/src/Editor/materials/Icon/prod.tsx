import { Icon as ImsIcon } from 'ims-view-pc';
import { CommonComponentProps } from '../../interface';

const Icon = ({ type, spin, rotate, styles }: CommonComponentProps) => {
  return (
    <ImsIcon
      type={type}
      spin={!!spin}
      rotate={rotate ? Number(rotate) : undefined}
      style={styles}
    />
  );
};

export default Icon;
