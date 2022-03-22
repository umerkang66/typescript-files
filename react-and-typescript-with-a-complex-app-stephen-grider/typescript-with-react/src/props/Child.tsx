import { FC } from 'react';

interface ChildProps {
  color: string;
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export const Child: FC<ChildProps> = props => {
  return (
    <div>
      {props.color}
      <button onClick={props.onClick}>Call the callback</button>
    </div>
  );
};
