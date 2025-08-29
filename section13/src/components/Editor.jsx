import "./Editor.css";
import { useState } from "react";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { getFormattedDate } from "../util/util";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") value = new Date(value);

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    onSubmit({
      ...input,
      createdDate: new Date(input.createdDate).getTime(),
    });
  };

  return (
    <div className="editor">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          value={getFormattedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion-section">
        <h4>오늘의 감정</h4>
        <div className="emotion-list-wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={`emotionItem${item.emotionId}`}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClickEmotion={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          onChange={onChangeInput}
        />
      </section>
      <section className="button-section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button text={"작성완료"} type="POSITIVE" onClick={onClickSubmit} />
      </section>
    </div>
  );
};

export default Editor;
