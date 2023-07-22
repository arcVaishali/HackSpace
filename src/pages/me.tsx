import {useContext} from 'react'
import { UserContext } from '../context/user';
import UserLoginCheck from '../components/UserLoginCheck';

const Me = () => {
    const {user} = useContext(UserContext);
  return (
    <UserLoginCheck>
      <div>{JSON.stringify(user)}</div>
    </UserLoginCheck>
  )
}

export default Me
