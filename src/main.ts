import './styles/styles.scss';
import readXML from './readxml.ts'

let datasheetsForm = document.querySelector<HTMLElement>('#datasheets');
if (datasheetsForm) {
    datasheetsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
    });
}

readXML();
