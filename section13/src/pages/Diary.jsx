import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../util/util";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryData = useDiary(params.id);

  if (!curDiaryData) {
    return <div>데이터 로딩중...</div>;
  }

  return (
    <div>
      <Header
        title={`${getFormattedDate(curDiaryData.createdDate)} 기록`}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer {...curDiaryData} />
    </div>
  );
};

export default Diary;
