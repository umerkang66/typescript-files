import { FC, useState, useRef, useEffect } from 'react';
import { User, users } from '../App';

const UserSearch: FC = () => {
  // We have to initialize it as null first, because we might not apply it anywhere
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    // When component render on screen focus on the input
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

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
      <input
        type="text"
        value={search}
        onChange={onChangeInput}
        ref={inputRef}
      />
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
