'use client';
import { useState } from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className: string;
  fullCount: number;
  currentCount?: number;
  errorMessage?: string;
  countCss?: string;
  labelCss: string;
}

const TextArea = ({
  name,
  className,
  fullCount,
  countCss,
  labelCss,
  ...rest
}: TextareaProps) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length <= fullCount) {
      setText(newText);
    }
  };

  return (
    <label
      className={`${labelCss} flex h-full flex-col border`}
      htmlFor="text-area"
    >
      <textarea
        name={name}
        className={`${className} resize-none focus:outline-none`}
        value={text}
        onChange={handleChange}
        {...rest}
      />
      <p className={`${countCss} self-end`}>
        {text.length}/{fullCount}
      </p>
    </label>
  );
};

export default TextArea;
