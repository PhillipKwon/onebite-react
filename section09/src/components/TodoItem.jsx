import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="todo-item_content">{content}</div>
      <div className="todo-item_date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
