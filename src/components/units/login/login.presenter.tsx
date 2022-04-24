import { ILoginPageUI } from "./Login.types";

export default function LoginPageUI(props: ILoginPageUI) {
  return (
    <div>
      ID : <input type="text" onChange={props.onChangeEmail}></input>
      <br />
      PW : <input type="password" onChange={props.onChangePassword}></input>
      <br />
      <button onClick={props.onClickSignUp}>회원가입</button>
      <button onClick={props.onClickLogin}>로그인</button>
    </div>
  );
}
