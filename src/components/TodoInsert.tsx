import React, { useState } from 'react';

type TodoInsertProps = {
  onInsert: (test: string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [ value, setValue ] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onInsert(value)
    setValue('')
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={(e) => onChange(e)}
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoInsert;