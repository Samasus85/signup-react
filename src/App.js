import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validpassword, setValidPassword] = useState(false)
  const [errorName, setErrorName] = useState('username must have digits')
  const [errorEmail, setErrorEmail] = useState('gmail is not valid')
  const [errorPassword, setErrorPassword] = useState('password must have digits')
  const [vaildForm, setValidForm] = useState(false)
  useEffect(() => {
    if (errorEmail || errorPassword) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [errorEmail, errorPassword])
  const nameHandler = (e) => {
    setName(e.target.value)
    const nameRegExp = (/['0-9']/)

    if (!nameRegExp.test(e.target.value)) {
      setErrorName('username must have digits')
    }
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!regExp.test(String(e.target.value).toLowerCase())) {
      setErrorEmail('gmail is not valid')
    } else {
      setErrorEmail('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    let validPassword = setPassword.split('').slice(0, 2)
    let reversPassword = setPassword.split('').reverse().join('')
    if (e.target.value.length > 5) {
      setValidEmail(validPassword + reversPassword)
      if (!e.target.value) {
        setErrorPassword('password must have digits')
      }
    } else {
      setErrorPassword('')
    }

  }
  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'name':
        setValidName(true)
        break;
      case 'email':
        setValidEmail(true)
        break;
      case 'password':
        setValidPassword(true)
        break;
    }
  }

  return (
    <div className="app">
      <form>
        <h1>Sign up</h1>
        <div>
          {(validName && errorName) && <div style={{ color: 'red' }}>{errorName}</div>}
          <input onChange={nameHandler} onBlur={blurHandler} name={name} type='text' placeholder='Enter your name' />
        </div>
        <div>
          {(validEmail && errorEmail) && <div style={{ color: 'red' }}>{errorEmail}</div>}
          <input onChange={emailHandler} onBlur={blurHandler} name={email} type='email' placeholder='Enter your email' />
        </div>
        <div>
          {(validpassword && errorPassword) && <div style={{ color: 'red' }}>{errorPassword}</div>}
          <input onChange={passwordHandler} onBlur={blurHandler} name={password} type='password' placeholder='Password' />

        </div>
        <button
          // disabled={!vaildForm}
          type="submit">button</button>
        {console.log(passwordHandler)}
      </form>
    </div>
  );
}

export default App;
