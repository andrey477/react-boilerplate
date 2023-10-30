import {FC, useState} from 'react';
import {Link, useLocation, useSearchParams} from "react-router-dom";

interface Props {

}

export const About: FC<Props> = () => {
  const [counter, setCounter] = useState(0)
  const location = useLocation()
  console.log(location);
  return (
    <div>
      <h1>About</h1>
      <Link to='/'>Main</Link>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>add</button>
    </div>
  );
}
