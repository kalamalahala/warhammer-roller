async function readFile() {
  const response = await fetch("./data/Tyranids.cat");
  const xmlString = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");
  console.log(xml);

  // output xml response from parser to p.xml-output
  const xmlOutput = document.querySelector<HTMLElement>("p.xml-output");
  if (xmlOutput) {
    xmlOutput.innerText = xmlString;
  }
}

export default function readXML(): void {
  readFile();
}
