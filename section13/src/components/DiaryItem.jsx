import "./DiaryItem.css";
import { getEmotionImage } from "../util/getEmotion";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="diary-item" onClick={() => nav(`/diary/${id}`)}>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정"} />
      </div>
    </div>
  );
};

export default DiaryItem;
