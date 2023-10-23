import parseXML from "./parsexml";

async function readFile() {
  const response = await fetch("./data/Imperium - Space Marines.cat");
  const xmlString = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");
  console.log(xml);

  const parsedXML = parseXML(xml.documentElement);
  console.log(parsedXML);
  // console.log(parsedXML.catalogue.sharedSelectionEntries.selectionEntry[20].selectionEntries.selectionEntry[0].profiles.profile.characteristics.characteristic[1]["#text"]);

  // output xml response from parser to p.xml-output
  const xmlOutput = document.querySelector<HTMLElement>("p.xml-output");
  if (xmlOutput) {
    xmlOutput.innerText = xmlString;
  }
}

export default function readXML(): void {
  readFile();
}
// [1].selectionEntryGroups.selectionEntryGroup.selectionEntries.selectionEntry[0].selectionEntries.selectionEntry.profiles.profile.characteristics.characteristic[1]["#text"]