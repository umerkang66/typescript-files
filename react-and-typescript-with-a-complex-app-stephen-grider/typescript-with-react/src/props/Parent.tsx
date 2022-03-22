import { Child } from './Child';

const Parent = () => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('Button is clicked');
  };

  return <Child color="blue" onClick={onClickHandler} />;
};

export default Parent;
