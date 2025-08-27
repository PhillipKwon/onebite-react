import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="editor">
      <input
        ref={contentRef}
        value={content}
        placeholder="새로운 TODO..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
