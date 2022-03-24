import { FC } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    // Get cells according the cellsState.order
    return order.map(id => data[id]);
  });

  const renderedCells = cells.map(cell => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
