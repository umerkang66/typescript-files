import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { deleteTodo, fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const connector = connect(mapStateToProps, { fetchTodos, deleteTodo });

type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux & {
  todos: Todo[];
};

interface AppState {
  fetching: boolean;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  fetchTodos(): void {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  }

  deleteTodo(id: number): void {
    this.props.deleteTodo(id);
  }

  renderTodos(): JSX.Element[] {
    return this.props.todos.map(
      (todo: Todo): JSX.Element => (
        <ul onClick={() => this.deleteTodo.call(this, todo.id)}>
          <li>Id: {todo.id}</li>
          <li>Title: {todo.title}</li>
          <li>Completed: {todo.completed}</li>
        </ul>
      )
    );
  }

  render(): JSX.Element {
    return (
      <div>
        <button onClick={this.fetchTodos.bind(this)}>FETCH TODOS</button>
        {this.state.fetching ? 'Loading...' : this.renderTodos()}
      </div>
    );
  }
}

export const App = connector(_App);
