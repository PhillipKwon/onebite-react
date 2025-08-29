import "./App.css";
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "Init":
      nextState = [...action.data];
      break;
    case "Create":
      nextState = [action.data, ...state];
      break;
    case "Update":
      nextState = state.map((item) =>
        parseInt(item.id) === parseInt(action.data.id) ? action.data : item
      );
      break;
    case "Delete":
      nextState = state.filter(
        (item) => parseInt(item.id) != parseInt(action.targetId)
      );
      break;
    default:
      break;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

// eslint-disable-next-line react-refresh/only-export-components
export const DiaryContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(0);
  const [data, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((element) => {
      if (Number(element.id) > maxId) {
        maxId = Number(element.id);
      }
    });

    idRef.current = maxId;

    dispatch({
      type: "Init",
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }

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
