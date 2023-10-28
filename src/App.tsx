import {FC, useEffect} from 'react';
import './assets/main.scss';
import {sum} from "./utils/sum";

interface Props {

}

export const App: FC<Props> = () => {
  useEffect(() => {
    console.log(sum(5, 4));
  }, [])

  return (
    <div>
      <h1 className='title'>Hello World!</h1>
    </div>
  );
}
