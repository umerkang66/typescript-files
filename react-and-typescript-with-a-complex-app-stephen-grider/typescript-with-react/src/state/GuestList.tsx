import { FC, useState } from 'react';

const GuestList: FC = () => {
  const [guests, setGuests] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const renderGuests = (): JSX.Element[] => {
    return guests.map((guest: string, i: number) => <li key={i}>{guest}</li>);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuests([...guests, inputText]);
    setInputText('');
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>{renderGuests()}</ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={inputText} onChange={onInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GuestList;
