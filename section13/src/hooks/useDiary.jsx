import { useContext, useEffect, useState } from "react";
import { DiaryContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryContext);
  const [curDiaryData, setCurDiaryData] = useState();

  useEffect(() => {
    const detail = data.find((item) => String(item.id) === String(id));

    if (!detail) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryData(detail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, nav]);

  return curDiaryData;
};

export default useDiary;
