import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          type="POSITIVE"
          text={"새 일기 쓰기"}
          className="new-diary-button"
        />
      </div>
      <div className="list-wrapper">
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
