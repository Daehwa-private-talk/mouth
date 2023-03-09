import * as yup from 'yup';

const PASSWORD_RULE_REGEXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const signInSchema = yup.object().shape({
  email: yup.string().email().required('이메일을 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

export const signUpSchema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요.'),
  email: yup
    .string()
    .email('이메일 형식에 맞게 입력해주세요.')
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .matches(PASSWORD_RULE_REGEXP, {
      message: '영문/숫자/특수문자 포함 8자 이상을 입력해주세요.',
    })
    .required('비밀번호를 입력해주세요.'),
  confirmPassword: yup
    .string()
    .matches(PASSWORD_RULE_REGEXP, {
      message: '영문/숫자/특수문자 포함 8자 이상을 입력해주세요.',
    })
    .oneOf([yup.ref('password')], '비밀번호와 일치하지 않습니다.')
    .required('비밀번호 확인을 입력해주세요.'),
});
