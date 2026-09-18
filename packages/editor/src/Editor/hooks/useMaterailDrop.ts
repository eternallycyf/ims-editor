import { useDrop } from 'react-dnd';
import { useComponentConfigStore } from '../stores/component-config';
import { getComponentById, useComponetsStore } from '../stores/components';

export interface ItemType {
  type: string;
  dragType?: 'move' | 'add';
  id: number;
}

export function useMaterailDrop(accept: string[], id: number) {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept,
    drop: (item: ItemType, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      const { addComponent, deleteComponent, components } = useComponetsStore.getState();
      const { componentConfig } = useComponentConfigStore.getState();

      if (item.dragType === 'move') {
        const component = getComponentById(item.id, components)!;
        deleteComponent(item.id);
        addComponent(component, id);
      } else {
        const config = componentConfig[item.type];
        addComponent(
          {
            id: new Date().getTime(),
            name: item.type,
            desc: config.desc,
            props: config.defaultProps,
          },
          id,
        );
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return { canDrop, drop };
}
