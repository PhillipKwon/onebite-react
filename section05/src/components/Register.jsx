import { useRef, useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  const onSubmit = () => {
    if (input.name === "") {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          value={input.name}
          onChange={onChange}
          name="name"
          placeholder="이름"
        />
      </div>
      <hr />
      <div>
        <input
          type="date"
          value={input.birth}
          onChange={onChange}
          name="birth"
        />
      </div>
      <hr />
      <div>
        <select value={input.country} onChange={onChange} name="country">
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>
      <hr />
      <div>
        <textarea value={input.bio} onChange={onChange} name="bio" />
      </div>
      <p>
        {input.name} - {input.birth} - {input.country}
      </p>
      {input.bio}

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
