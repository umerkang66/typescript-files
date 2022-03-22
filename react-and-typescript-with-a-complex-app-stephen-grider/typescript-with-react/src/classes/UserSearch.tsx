import { Component } from 'react';
import { User } from '../App';

interface UserSearchClassProps {
  users: User[];
}

interface UserSearchClassState {
  search: string;
  user: User | undefined;
}

class UserSearchClass extends Component<
  UserSearchClassProps,
  UserSearchClassState
> {
  constructor(props: UserSearchClassProps) {
    super(props);
    this.state = { search: '', user: undefined };
  }

  onChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ search: e.target.value });
  }

  onButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const user = this.props.users.find((user: User) => {
      return user.name === this.state.search;
    });

    this.setState({ user: user });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>User Search</h1>
        <input
          type="text"
          value={this.state.search}
          onChange={this.onChangeInput.bind(this)}
        />
        <button onClick={this.onButtonClick.bind(this)}>Find User</button>
        {this.state.user && (
          <div>
            <h3>Name: {this.state.user.name}</h3>
            <h3>Age: {this.state.user.age}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default UserSearchClass;
