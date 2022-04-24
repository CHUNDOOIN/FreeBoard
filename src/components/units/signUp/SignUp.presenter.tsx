import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error, SignUpButton } from "./SignUp.style";
import { ISignUpUIProps } from "./SignUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(props.schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(props.onClickSignUp)}>
      이메일:<input type="text" {...register("email")}></input>
      <Error style={{ color: "red" }}>{formState.errors.email?.message}</Error>
      이름:<input type="text" {...register("name")}></input>
      <Error style={{ color: "red" }}>{formState.errors.name?.message}</Error>
      비밀번호:<input type="password" {...register("password")}></input>
      <Error style={{ color: "red" }}>
        {formState.errors.password?.message}
      </Error>
      비밀번호 확인:
      <input type="password" {...register("checkPassword")}></input>
      <Error style={{ color: "red" }}>
        {formState.errors.checkPassword?.message}
      </Error>
      <SignUpButton>가입하기</SignUpButton>
    </form>
  );
}
