import { useMaterailDrop } from '../../hooks/useMaterailDrop';
import { CommonComponentProps } from '../../interface';
import { PAGE_DROP_ACCEPT } from '../accept';

function Page({ id, children, styles }: CommonComponentProps) {
  const { canDrop, drop } = useMaterailDrop(PAGE_DROP_ACCEPT, id);

  return (
    <div
      data-component-id={id}
      ref={drop}
      className="p-[20px] h-[100%] box-border"
      style={{ ...styles, border: canDrop ? '2px solid blue' : 'none' }}
    >
      {children}
    </div>
  );
}

export default Page;
