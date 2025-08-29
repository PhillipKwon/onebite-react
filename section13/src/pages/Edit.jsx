import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryContext, DiaryDispatchContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryContext);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const [curDiaryData, setCurDiaryData] = useState();

  useEffect(() => {
    const detail = data.find((item) => String(item.id) === String(params.id));

    if (!detail) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryData(detail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, nav]);

  const onClickDelete = () => {
    if (confirm("삭제 하시겠습니까?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onClickUpdate = (data) => {
    onUpdate({
      ...data,
    });
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type="NEGATIVE" onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryData} onSubmit={onClickUpdate} />
    </div>
  );
};

export default Edit;
