import { useSignUpController } from '@/hooks/controllers/useSignUpController';
import { SignUpView } from './SignUp.view';

const SignIn = () => {
  const { control, onSubmit, errors } = useSignUpController();

  return <SignUpView control={control} onSubmit={onSubmit} errors={errors} />;
};

export default SignIn;
