import "./EmotionItem.css";
import { getEmotionImage } from "../util/getEmotion";

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClickEmotion,
}) => {
  return (
    <div
      className={`emotion-item ${isSelected ? `emotion-on-${emotionId}` : ""}`}
      onClick={onClickEmotion}
    >
      <img className="emotion-img" src={getEmotionImage(emotionId)} />
      <div className="emotion-name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
