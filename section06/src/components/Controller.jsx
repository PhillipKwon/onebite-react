const Controller = ({ setCount }) => {
  const setParamCounter = (e) => {
    setCount(parseInt(e.target.innerHTML));
  };
  return (
    <div>
      <button onClick={setParamCounter}>-100</button>
      <button onClick={setParamCounter}>-10</button>
      <button onClick={setParamCounter}>-1</button>
      <button onClick={setParamCounter}>+1</button>
      <button onClick={setParamCounter}>+10</button>
      <button onClick={setParamCounter}>+100</button>
      <button onClick={setParamCounter}>+129</button>
    </div>
  );
};

export default Controller;
