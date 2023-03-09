import { signInSchema } from '@/@schema/auth';
import { SignIn } from '@/@types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export const useSignInController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitSignInInfo: SubmitHandler<SignIn> = (data) => {
    console.log(data);
  };

  const catchError: SubmitErrorHandler<SignIn> = (error) => {
    console.log({ error });
  };

  const onSubmit = handleSubmit(submitSignInInfo, catchError);

  return {
    control,
    onSubmit,
    errors,
  };
};
