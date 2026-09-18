import { CustomTag as ImsCustomTag } from 'ims-view-pc';
import { CommonComponentProps } from '../../interface';

const CustomTag = ({ label, color, showDot, tooltip, styles }: CommonComponentProps) => {
  return (
    <span style={{ display: 'inline-block', ...styles }}>
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
