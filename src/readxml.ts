import parseXML from "./parsexml";

async function readXML(source: string): Promise<any> {
  
  const response = await fetch(`./data/${source}`);
  const xmlString = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");

  const parsedXML = parseXML(xml.documentElement);

  // output xml response from parser to p.xml-output
  const xmlOutput = document.querySelector<HTMLElement>("p.xml-output");
  if (xmlOutput) {
    xmlOutput.innerText = xmlString;
  }

  return parsedXML;
}

export default readXML;
