import React from "react";
import { useNavigate } from "react-router-dom";

class Login extends React.Component {
  goToMain = () => {
    this.props.navigate("/main"); // ✅ 올바른 경로 설정
  };

  render() {
    return (
      <div className="Login">
        <div className="outbox">
          <header className="westagram">Westagram</header>
          <form className="id_pw">
            <input className="idInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input className="pwInput" type="password" placeholder="비밀번호" />
            <button type="button" onClick={this.goToMain}>로그인</button>
          </form>
          <footer>비밀번호를 잊으셨나요?</footer>
        </div>
      </div>
    );
  }
}

// ✅ HOC를 올바르게 수정하여 `useNavigate`를 적용
function WithNavigate(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate(); // ✅ useNavigate는 함수형 컴포넌트에서만 호출 가능
    return <Component {...props} navigate={navigate} />;
  };
}


export default WithNavigate(Login);
