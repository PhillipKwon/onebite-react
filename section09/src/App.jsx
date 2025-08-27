import { useRef, useReducer, useCallback, createContext } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 3,
    isDone: true,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "공부하기2",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "공부하기3",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "Create":
      return [action.data, ...state];
    case "Update":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "Delete":
      return state.filter((item) => item.id != action.targetId);
    default:
      return state;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext();

function App() {
  const idRef = useRef(4);
  const [todos, dispatch] = useReducer(reducer, [...mockData]);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "Create",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "Update",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "Delete",
      targetId,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
