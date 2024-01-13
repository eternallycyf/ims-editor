import { Editor } from '@ims-view/editor';
import { useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage, HTML5Backend } from 'react-dnd-html5-backend';
import './index.less';

interface ItemType {
  color: string;
}

interface BoxProps {
  color: string;
}

const DragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging) {
    return null;
  }
  return (
    <div
      className="drag-layer"
      style={{
        left: currentOffset?.x,
        top: currentOffset?.y,
      }}
    >
      {item.color} 拖拖拖
    </div>
  );
};

function Box(props: BoxProps) {
  const ref = useRef(null);

  const [{ dragging }, drag, dragPreview] = useDrag({
    type: 'box',
    item: {
      color: props.color,
    },
    collect: (monitor) => {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });

  useEffect(() => {
    drag(ref);
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div
      ref={ref}
      className={dragging ? 'box dragging' : 'box'}
      style={{ background: props.color || 'blue' }}
    ></div>
  );
}

function Container() {
  const [boxes, setBoxes] = useState<ItemType[]>([]);
  const ref = useRef(null);

  const [, drop] = useDrop<ItemType>(() => {
    return {
      accept: 'box',
      drop(item) {
        setBoxes((boxes) => [...boxes, item]);
      },
    };
  });

  useEffect(() => {
    drop(ref);
  }, []);

  return (
    <div ref={ref} className="container">
      {boxes.map((item, index) => {
        return <Box key={index} color={item.color}></Box>;
      })}
    </div>
  );
}

const Demo = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container></Container>
      <Box color="blue"></Box>
      <Box color="red"></Box>
      <Box color="green"></Box>
      <DragLayer />
    </DndProvider>
  );
};

export default Demo;
