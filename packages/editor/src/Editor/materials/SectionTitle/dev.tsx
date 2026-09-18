import { SectionTitle as ImsSectionTitle } from 'ims-view-pc';
import { useDrag } from 'react-dnd';
import { CommonComponentProps } from '../../interface';

const SectionTitle = ({ id, title, tooltip, showPrefixBar, styles }: CommonComponentProps) => {
  const [, drag] = useDrag({
    type: 'SectionTitle',
    item: {
      type: 'SectionTitle',
      dragType: 'move',
      id,
    },
  });

  return (
    <div ref={drag} data-component-id={id} style={styles}>
      <ImsSectionTitle
        title={title}
        tooltip={tooltip || undefined}
        showPrefixBar={showPrefixBar !== false}
      />
    </div>
  );
};

export default SectionTitle;
