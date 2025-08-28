import { useContext, useState } from "react";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import { DiaryContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
  const start = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const end = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    0,
    0,
    0
  ).getTime();
  return data.filter(
    (item) => start <= item.createdDate && end >= item.createdDate
  );
};

const Home = () => {
  const data = useContext(DiaryContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onDecMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecMonth} />}
        rightChild={<Button text={">"} onClick={onIncMonth} />}
      />
      <div>
        <DiaryList list={monthlyData} />
      </div>
    </div>
  );
};

export default Home;
