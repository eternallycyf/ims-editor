import { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { useMaterailDrop } from '../../hooks/useMaterailDrop';
import { CommonComponentProps } from '../../interface';
import { CONTAINER_DROP_ACCEPT } from '../accept';

const Container = ({ id, name, children, styles }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(CONTAINER_DROP_ACCEPT, id);

  const divRef = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag({
    type: name,
    item: {
      type: name,
      dragType: 'move',
      id,
    },
  });

  useEffect(() => {
    drop(divRef);
    drag(divRef);
  }, []);

  return (
    <div
      data-component-id={id}
      ref={divRef}
      style={styles}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
