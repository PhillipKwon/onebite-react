import { useReducer } from "react";

function reducer(state, action) {
  return (state += action.data);
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: -1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>PLUS</button>
      <button onClick={onClickMinus}>MINUS</button>
    </div>
  );
};

export default Exam;
