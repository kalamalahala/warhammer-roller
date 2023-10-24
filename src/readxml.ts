import parseXML from "./parsexml";

async function readXML(source: string): Promise<any> {
  console.log("readXML", source);
  const response = await fetch(`./data/${source}`);
  const xmlString = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");
  console.log(xml);

  const parsedXML = parseXML(xml.documentElement);
  console.log(parsedXML);

  // output xml response from parser to p.xml-output
  const xmlOutput = document.querySelector<HTMLElement>("p.xml-output");
  if (xmlOutput) {
    xmlOutput.innerText = xmlString;
  }

  console.log("parsedXML", parsedXML);

  return parsedXML;
}

export default readXML;
