import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header
        title={"2025년 8월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <div>
        <DiaryList />
      </div>
    </div>
  );
};

export default Home;
