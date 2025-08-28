import "./App.css";
import { createContext, useReducer, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-08-28").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2025-07-28").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2025-09-28").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
  {
    id: 4,
    createdDate: new Date("2025-08-27").getTime(),
    emotionId: 4,
    content: "4번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "Create":
      return [action.data, ...state];
    case "Update":
      return state.map((item) =>
        parseInt(item.id) === parseInt(action.data.id) ? action.data : item
      );
    case "Delete":
      return state.filter(
        (item) => parseInt(item.id) != parseInt(action.targetId)
      );
  }
  return state;
}

// eslint-disable-next-line react-refresh/only-export-components
export const DiaryContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(5);
  const [data, dispatch] = useReducer(reducer, [...mockData]);

  const onCreate = ({ createdDate, emotionId, content }) => {
    dispatch({
      type: "Create",
      data: {
        id: idRef.current++,
        createdDate,
        content,
        emotionId,
      },
    });
  };

  const onUpdate = ({ id, createdDate, emotionId, content }) => {
    dispatch({
      type: "Update",
      data: { id, createdDate, content, emotionId },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "Delete",
      targetId: id,
    });
  };

  return (
    <div className="wrap">
      <DiaryContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryContext.Provider>
    </div>
  );
}

export default App;
