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
  textAreaCss: string;
}

const TextArea = ({
  name,
  className,
  fullCount,
  countCss,
  textAreaCss,
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
    <div className={`${textAreaCss} relative`}>
      <textarea
        name={name}
        className={`${className} h-full w-full resize-none`}
        value={text}
        onChange={handleChange}
        {...rest}
      />
      <div className={`${countCss} absolute bottom-1 right-3 text-sm`}>
        <span>
          {text.length}/{fullCount}
        </span>
      </div>
    </div>
  );
};

export default TextArea;
