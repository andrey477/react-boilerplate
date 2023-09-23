import './assets/index.scss';
import Img from './assets/images/1.png';
import {sum} from "./utils";
import {testF} from "./test";

const init = () => {
	const h1 = document.createElement('h1');
	h1.innerText = 'Hello' + sum(4, 4);
	h1.classList.add('title');
	const img = document.createElement('img');
	img.src = Img;
	document.body.appendChild(h1);
	document.body.appendChild(img);
	console.log(testF([1], [2]));
}

init();
