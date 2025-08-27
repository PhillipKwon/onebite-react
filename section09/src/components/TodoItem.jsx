import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="todo-item_content">{content}</div>
      <div className="todo-item_date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
