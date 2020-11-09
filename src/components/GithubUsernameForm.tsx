import React, { useState } from 'react';
import './GithubUsernameForm.css'

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
}

const GithubUsernameForm = ({ onSubmitUsername }: GithubUsernameFormProps) => {
  const [ value, setValue ] = useState('')

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitUsername(value)
  }

  return (
    <form
      className="GithubUsernameForm"
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        onChange={(e) => onChangeValue(e)}
        value={value}
        placeholder="Github 계정명을 입력하세요."
      />
      <button type="submit">조회</button>
    </form>
  )
}

export default GithubUsernameForm;