const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e.target); //SyntheticBaseEvent

    console.log(text);
  };

  return (
    <button style={{ color: color }} onClick={onClickButton}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
