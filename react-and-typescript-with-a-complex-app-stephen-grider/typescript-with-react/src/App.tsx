import UserSearch from './refs/UserSearch';

// THIS IS FOR CLASS BASED USER_SEARCH COMPONENT
// USERS
export interface User {
  name: string;
  age: number;
}

export const users: User[] = [
  { name: 'umer', age: 21 },
  { name: 'kang', age: 25 },
  { name: 'gulzar', age: 51 },
];

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

export default App;
