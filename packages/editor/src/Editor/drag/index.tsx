import { useCallback, useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.less';

interface CardItem {
  id: number;
  content: string;
}

interface DragData {
  id: number;
  index: number;
}

interface CardProps {
  data: CardItem;
  index: number;
  swapIndex: (index1: number, index2: number) => void;
}
function Card(props: CardProps) {
  const { data, swapIndex, index } = props;

  const ref = useRef(null);

  const [{ dragging }, drag] = useDrag({
    type: 'card',
    item: {
      id: data.id,
      index,
    },
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });
  const [, drop] = useDrop({
    accept: 'card',
    // drop(item: DragData) {
    //   console.log(item);
    //   swapIndex(index, item.index);
    // },
    hover(item: DragData) {
      swapIndex(index, item.index);
      item.index = index;
    },
  });

  useEffect(() => {
    drag(ref);
    drop(ref);
  }, []);

  return (
    <div ref={ref} className={dragging ? 'card dragging' : 'card'}>
      {data.content}
    </div>
  );
}

function App() {
  const [cardList, setCardList] = useState<CardItem[]>([
    {
      id: 0,
      content: '000',
    },
    {
      id: 1,
      content: '111',
    },
    {
      id: 2,
      content: '222',
    },
    {
      id: 3,
      content: '333',
    },
    {
      id: 4,
      content: '444',
    },
  ]);

  const swapIndex = useCallback((index1: number, index2: number) => {
    [cardList[index1], cardList[index2]] = [cardList[index2], cardList[index1]];
    setCardList([...cardList]);
  }, []);

  return (
    <div className="card-list">
      {cardList.map((item: CardItem, index) => (
        <Card data={item} key={'card_' + item.id} index={index} swapIndex={swapIndex} />
      ))}
    </div>
  );
}

export default () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  );
};
