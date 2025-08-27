import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h3>오늘은 🥳</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const MemoizedHeader = memo(Header);

export default MemoizedHeader;
