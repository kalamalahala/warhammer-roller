import './styles/styles.scss';

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './App';

import 'solid-devtools';



const appDiv: HTMLElement = document.getElementById('app')!;

render(() => <Router> <App /> </Router>, appDiv!);