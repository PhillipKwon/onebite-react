const Main = () => {
  const user = {
    name: "권경민",
    isLogin: false,
  };
  // return <main>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</main>;
  return (
    <div
      style={{
        background: "red",
      }}
    >
      {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    </div>
  );
};

export default Main;
