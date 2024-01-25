import React, { useRef } from 'react';
import styles from './componentsModuleCss/inputs.module.css';
import './componentsModuleCss/demoinputstyle.css';

interface InputRepoProps {
  changeInputValue: (value: string) => void;
}

export default function InputRepo({ changeInputValue }: InputRepoProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeInputValue(event.target.value);
  };

  return (
    <div className='input-group'>
      <input
        type='text'
        className='input-group__input'
        ref={inputRef} // Attach ref to input element
        onChange={handleInputChange}
      />
    </div>
  );
}
