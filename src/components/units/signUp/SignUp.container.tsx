import { useRouter } from "next/router";
import SignUpUI from "./SignUp.presenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUp.query";
import { Modal } from "antd";
import { IFormValues } from "./SignUp.types";

export default function SignUp() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const schema = yup.object({
    email: yup
      .string() // xx은 문자열만 가능합니다. 이부분도 넣을수있다.
      .email("이메일 형식이 적합하지 않습니다.")
      .required("이메일은 필수 입력 사항입니다."),
    password: yup
      .string()
      .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
      .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
      .required("비밀번호는 필수 입력 사항입니다."),
    name: yup
      .string()
      .max(5, "작성자는 5글자 이내 문자열입니다.")
      .required("작성자는 필수 입력 사항입니다."),
  });

  const onClickSignUp = async (data: IFormValues) => {
    const { checkPassword, ...rest } = data;

    if (rest.password === checkPassword) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...rest,
            },
          },
        });
        console.log(result);
        Modal.success({ content: "회원 가입을 축하드립니다!" });
        router.push("/login");
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    } else {
      Modal.error({
        content: "비밀번호가 다릅니다.",
      });
    }
  };

  return <SignUpUI onClickSignUp={onClickSignUp} schema={schema}></SignUpUI>;
}
