import {useContext} from 'react'
import { UserContext } from '../context/user';

const Me = () => {
    const {user} = useContext(UserContext);
  return (
      <div>{JSON.stringify(user)}</div>
  )
}

export default Me
