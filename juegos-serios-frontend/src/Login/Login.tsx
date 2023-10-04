import {Input} from './Input';

export function Login() {
  return (
    <form className="formLogin">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
