	import { useState } from 'react';

export function Login({ handleClose, handleLogin }: { handleClose: () => void, handleLogin: (username: string, password: string) => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  return (
    <div className='loginPopUp'>
      <div className="formLogin background-gradient">
        <input className='mb-3' type="text" placeholder="User" onChange={handleUsernameChange} />
        <input className='mb-3' type="password" placeholder="Password" onChange={handlePasswordChange} />
        <button className='mb-3 closeLoginPopUp' onClick={() => handleLogin(username, password)}>Log in</button>
        <button className='mb-3 closeLoginPopUp' onClick={handleClose}>Close</button>
        <p className="storageUseText">Your privacy: this data will be stored in the memory of the browser</p>
      </div>
    </div>  
  );
}
