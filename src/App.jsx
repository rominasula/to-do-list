import { useReducer } from 'react';
import ToDoList from "./components/ToDoList";
import ItemContext from './itemContext';
import initialState from "./data";
import reducer from './reducer';
import AddListItem from './components/AddListItem';
import Header from './components/Header';
import './index.css';

export default function App() {
  const [list, dispatch] = useReducer(reducer, initialState.toReversed());

  return (
    <div className="page flex center">
      <div className="content">
        <Header>Create Todo List</Header>
        <ItemContext.Provider value={dispatch}>
          <AddListItem newItemId={list && list.length > 0 ? list[0].id + 1 : 1} />
          <ToDoList list={list} />
        </ItemContext.Provider>
      </div>
    </div>
  );
}
