import { FC } from 'react';
import {Link} from "react-router-dom";

interface Props {

}

export const Home: FC<Props> = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/about'>About</Link>
    </div>
  );
}
