export interface IFormValues {
  email?: string;
  password?: string;
  checkPassword?: string;
  name?: string;

  error?: any;
}

export interface ISignUpUIProps {
  onClickSignUp: (data: IFormValues) => void;
  schema: any;
}
