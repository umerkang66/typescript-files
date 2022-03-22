import { FC, useState } from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'umer', age: 21 },
  { name: 'kang', age: 25 },
  { name: 'gulzar', age: 51 },
];

const UserSearch: FC = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState<User | undefined>(undefined);

  const onClickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const user = users.find(user => {
      return user.name === search;
    });

    setUser(user);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input type="text" value={search} onChange={onChangeInput} />
      <button onClick={onClickButton}>Find User</button>
      {user && (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
