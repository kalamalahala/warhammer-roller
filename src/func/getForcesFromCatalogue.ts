import { SpaceMarineCatalogue } from "../schema/SpaceMarines";

export default async function getForcesFromCatalogue(catalogue: SpaceMarineCatalogue) {
    // check if object has key sharedSelectionEntries.selectionEntry[]
    if (!catalogue.hasOwnProperty("sharedSelectionEntries")) {
        // need to handle other catalog types
        return [];
    }

    // loop through sharedSelectionEntries.selectionEntry[] and return array of objects with property type: "unit" || type: "model"
    const forces: Array<any> =
        catalogue.sharedSelectionEntries.selectionEntry.filter(
            (entry) => entry.type == "unit" || entry.type == "model"
        );

    return forces;
}
