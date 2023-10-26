import { useState } from 'react';

export function Login({ handleClose, handleLogin }: { handleClose: () => void, handleLogin: (username: string, password: string) => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  return (
    <div className='loginPopUp'>
      <div className="formLogin background-gradient">
        <input type="text" placeholder="Usuario" onChange={handleUsernameChange} />
        <input className='mb-3' type="password" placeholder="Contraseña" onChange={handlePasswordChange} />
        <button className='mb-3 closeLoginPopUp' onClick={() => handleLogin(username, password)}>Iniciar sesión</button>
        <button className='mb-3 closeLoginPopUp' onClick={handleClose}>Cerrar</button>
        <p className="storageUseText">Tu privacidad: estos datos se guardan en la memoria del navegador</p>
      </div>
    </div>  
  );
}
