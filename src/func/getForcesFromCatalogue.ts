import { SpaceMarineCatalogue } from "../schema/SpaceMarines";

export default async function getForcesFromCatalogue(catalogue: SpaceMarineCatalogue) {
    // check if object has key sharedSelectionEntries.selectionEntry[]
    if (!catalogue.hasOwnProperty("sharedSelectionEntries")) {
        // need to handle other catalog types
        return [];
    }

    // loop through sharedSelectionEntries.selectionEntry[{}] and return array of objects with property type: "unit" || type: "model"
    const forces: Array<any> = [];
    for (let i = 0; i < catalogue.sharedSelectionEntries.selectionEntry.length; i++) {
        const entry = catalogue.sharedSelectionEntries.selectionEntry[i];
        if (entry.type === "unit" || entry.type === "model") {
            forces.push(entry);
        }
    }

    return forces;
}
