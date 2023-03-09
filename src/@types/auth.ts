import { ReactElement } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInFormType {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignIn>;
}

export interface SignUpFormType {
  control: Control<SignUp>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignUp>;
}

export interface RouteComponentType {
  component?: ReactElement;
}
