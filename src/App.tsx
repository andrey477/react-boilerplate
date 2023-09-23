import { FC } from 'react';
import './assets/main.scss';

interface Props {

}

export const App: FC<Props> = () => {
  return (
    <div>
      <h1 className='title'>Hello World!</h1>
    </div>
  );
}
