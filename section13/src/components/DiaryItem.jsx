import "./DiaryItem.css";
import { getEmotionImage } from "../util/getEmotion";
import Button from "./Button";

const DiaryItem = () => {
  const emotionId = 1;

  return (
    <div className="diary-item">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(1)} />
      </div>
      <div className="info_section">
        <div className="date">{new Date().toLocaleDateString()}</div>
        <div className="content">안녕하세요</div>
      </div>
      <div className="button_section">
        <Button text={"수정"} />
      </div>
    </div>
  );
};

export default DiaryItem;
