import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <Parent />
      <GuestList />
      <UserSearch />
    </div>
  );
};

export default App;
