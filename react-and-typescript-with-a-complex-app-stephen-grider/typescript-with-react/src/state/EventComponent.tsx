import { FC } from 'react';

const EventComponent: FC = () => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Im being dragged');
  };

  return (
    <div draggable onDragStart={onDragStart}>
      Drag Me!
    </div>
  );
};

export default EventComponent;
