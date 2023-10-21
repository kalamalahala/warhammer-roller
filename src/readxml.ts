async function readFile() {
    const response = await fetch('./public/data/Tyranids.cat');
    const xmlString = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, "text/xml");
    console.log(xml);
}

let parser: DOMParser = new DOMParser();
let xmlString: string = "<example>Some XML</example>";
let xml: Document = parser.parseFromString(xmlString, "text/xml");

export default function readXML(): void {
    console.log(xml);
    readFile();
    
}