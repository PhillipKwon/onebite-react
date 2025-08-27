import { useParams, useSearchParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const [searchParam, setParams] = useSearchParams();

  console.log(params, searchParam);

  return <div>Diary {params.id} </div>;
};

export default Diary;
