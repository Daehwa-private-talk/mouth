import { signUpSchema } from '@/@schema/auth';
import { SignUp } from '@/@types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export const useSignUpController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const submitSignUpInfo: SubmitHandler<SignUp> = (data) => {
    console.log(data);
  };

  const catchError: SubmitErrorHandler<SignUp> = (error) => {
    console.log({ error });
  };

  const onSubmit = handleSubmit(submitSignUpInfo, catchError);

  return {
    control,
    onSubmit,
    errors,
  };
};
