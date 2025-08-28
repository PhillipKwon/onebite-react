import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ list }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChange = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return list.toSorted((a, b) => {
      if (sortType === "oldest") return a.createdDate - b.createdDate;
      else return b.createdDate - a.createdDate;
    });
  };

  return (
    <div className="diary-list">
      <div className="menu-bar">
        <select onChange={onChange}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          type="POSITIVE"
          text={"새 일기 쓰기"}
          className="new-diary-button"
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list-wrapper">
        {getSortedData().map((item) => {
          return <DiaryItem key={`diary${item.id}`} {...item} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
