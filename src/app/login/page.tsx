'use client';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import ErrorMessages from '@/shared/input/errorMessage';
import Input from '@/shared/input/input';

interface FormInput {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<FormInput>();

  const [isVisible, setIsVisible] = useState(false);

  const handleEyeClick = () => {
    setIsVisible((prev) => !prev);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('결과:', data);
    // 이후 추가 작업 예정
  };

  return (
    <div className="mt-[100] flex min-h-screen w-full items-start justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-2/4 flex-col gap-5"
        noValidate
      >
        <div>
          <Input
            {...register('email', {
              required: '이메일을 입력해주세요.',
              onChange: (e) => {
                const value = e.target.value;
                if (value.length > 1) {
                  clearErrors('email');
                }
              },
              onBlur: (e) => {
                const value = e.target.value;
                if (!value) {
                  setError('email', {
                    type: 'manual',
                    message: '이메일을 입력해주세요.',
                  });
                } else if (
                  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                    value
                  )
                ) {
                  setError('email', {
                    type: 'manual',
                    message: '올바른 이메일 형식을 입력해주세요.',
                  });
                } else {
                  clearErrors('email');
                }
              },
            })}
            type="email"
            name="email"
            placeholder="이메일 입력"
            className="w-full rounded-md border-2 p-3 focus:outline-green-300"
            isError={!!errors.email}
            noneBorder="border-black-400"
            errorBorder="border-error"
          />
          {errors.email && (
            <ErrorMessages
              errorClass="text-error text-sm"
              errorMessage={errors.email?.message as string}
            />
          )}
        </div>
        <div className="relative w-full">
          <Input
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
            name="password"
            placeholder="비밀번호 입력"
            type={isVisible ? 'text' : 'password'}
            className="w-full rounded-md border-2 p-3 focus:outline-green-300"
            isError={!!errors.password}
            noneBorder="border-black-400"
            errorBorder="border-error"
            isVisible={isVisible}
            onEyeClick={handleEyeClick}
          />
          {errors.password && (
            <ErrorMessages
              errorClass="text-error text-sm"
              errorMessage={errors.password?.message as string}
            />
          )}
        </div>

        <button
          type="submit"
          className={`w-full rounded-md p-3 text-white-100 ${!isValid ? 'cursor bg-black-300' : 'bg-green-300'}`}
          disabled={!isValid}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
