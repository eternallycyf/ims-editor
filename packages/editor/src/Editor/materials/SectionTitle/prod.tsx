import { SectionTitle as ImsSectionTitle } from 'ims-view-pc';
import { CommonComponentProps } from '../../interface';

const SectionTitle = ({ title, tooltip, showPrefixBar, styles }: CommonComponentProps) => {
  return (
    <div style={styles}>
      <ImsSectionTitle
        title={title}
        tooltip={tooltip || undefined}
        showPrefixBar={showPrefixBar !== false}
      />
    </div>
  );
};

export default SectionTitle;
