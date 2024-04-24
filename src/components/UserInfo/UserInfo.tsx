import { useContext } from 'react';
import { UserContext } from '../../App';

export function UserInfo() {
  const user = useContext(UserContext);
  return (
    <>
      <span>{user?.name}</span>
      <span>{user?.age}</span>
    </>
  );
}
