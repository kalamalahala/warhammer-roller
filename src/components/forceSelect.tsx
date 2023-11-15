import { For, Show, createSignal } from "solid-js";
import { Row, Col } from "solid-bootstrap";
import readXML from "../readxml";
import UnitSelect from "./UnitSelect";
import logError from "../func/logError";

function ForceSelect() {
    const [forces] = createSignal([
        {
            name: "Aeldari - Aeldari Library",
            catalog: "Aeldari - Aeldari Library.cat",
        },
        {
            name: "Aeldari - Craftworlds",
            catalog: "Aeldari - Craftworlds.cat",
        },
        {
            name: "Aeldari - Drukhari",
            catalog: "Aeldari - Drukhari.cat",
        },
        {
            name: "Aeldari - Ynnari",
            catalog: "Aeldari - Ynnari.cat",
        },
        {
            name: "Chaos - Chaos Daemons Library",
            catalog: "Chaos - Chaos Daemons Library.cat",
        },
        {
            name: "Chaos - Chaos Daemons",
            catalog: "Chaos - Chaos Daemons.cat",
        },
        {
            name: "Chaos - Chaos Knights",
            catalog: "Chaos - Chaos Knights.cat",
        },
        {
            name: "Chaos - Chaos Knights Library",
            catalog: "Chaos - Chaos Knights Library.cat",
        },
        {
            name: "Chaos - Chaos Space Marines",
            catalog: "Chaos - Chaos Space Marines.cat",
        },
        {
            name: "Chaos - Death Guard",
            catalog: "Chaos - Death Guard.cat",
        },
        {
            name: "Chaos - Thousand Sons",
            catalog: "Chaos - Thousand Sons.cat",
        },
        {
            name: "Chaos - Thousand Sons Library",
            catalog: "Chaos - Thousand Sons Library.cat",
        },
        {
            name: "Chaos - Titanicus Traitoris",
            catalog: "Chaos - Titanicus Traitoris.cat",
        },
        {
            name: "Chaos - World Eaters",
            catalog: "Chaos - World Eaters.cat",
        },
        {
            name: "Genestealer Cults",
            catalog: "Genestealer Cults.cat",
        },
        {
            name: "Imperium - Adepta Sororitas",
            catalog: "Imperium - Adepta Sororitas.cat",
        },
        {
            name: "Imperium - Adeptus Custodes",
            catalog: "Imperium - Adeptus Custodes.cat",
        },
        {
            name: "Imperium - Adeptus Mechanicus",
            catalog: "Imperium - Adeptus Mechanicus.cat",
        },
        {
            name: "Imperium - Adeptus Ministorum",
            catalog: "Imperium - Adeptus Ministorum.cat",
        },
        {
            name: "Imperium - Adeptus Titanicus",
            catalog: "Imperium - Adeptus Titanicus.cat",
        },
        {
            name: "Imperium - Agents of the Imperium",
            catalog: "Imperium - Agents of the Imperium.cat",
        },
        {
            name: "Imperium - Astra Militarum",
            catalog: "Imperium - Astra Militarum.cat",
        },
        {
            name: "Imperium - Astra Militarum - Library",
            catalog: "Imperium - Astral Militarum - Library.cat",
        },
        // Black Templars
        {
            name: "Imperium - Black Templars",
            catalog: "Imperium - Black Templars.cat",
        },
        // Blood Angels
        {
            name: "Imperium - Blood Angels",
            catalog: "Imperium - Blood Angels.cat",
        },
        // Dark Angels
        {
            name: "Imperium - Dark Angels",
            catalog: "Imperium - Dark Angels.cat",
        },
        // Deathwatch
        {
            name: "Imperium - Deathwatch",
            catalog: "Imperium - Deathwatch.cat",
        },
        // Grey Knights
        {
            name: "Imperium - Grey Knights",
            catalog: "Imperium - Grey Knights.cat",
        },
        // Imperial Fists
        {
            name: "Imperium - Imperial Fists",
            catalog: "Imperium - Imperial Fists.cat",
        },
        // Imperial Fists - Library
        {
            name: "Imperium - Imperial Fists - Library",
            catalog: "Imperium - Imperial Fists - Library.cat",
        },
        // Imperial Knights
        {
            name: "Imperium - Imperial Knights",
            catalog: "Imperium - Imperial Knights.cat",
        },
        // Iron Hands
        {
            name: "Imperium - Iron Hands",
            catalog: "Imperium - Iron Hands.cat",
        },
        // Raven Guard
        {
            name: "Imperium - Raven Guard",
            catalog: "Imperium - Raven Guard.cat",
        },
        // Salamanders
        {
            name: "Imperium - Salamanders",
            catalog: "Imperium - Salamanders.cat",
        },
        {
            name: "Imperium - Space Marines",
            catalog: "Imperium - Space Marines.cat",
        },
        // Space Wolves
        {
            name: "Imperium - Space Wolves",
            catalog: "Imperium - Space Wolves.cat",
        },
        // Ultramarines
        {
            name: "Imperium - Ultramarines",
            catalog: "Imperium - Ultramarines.cat",
        },
        // White Scars
        {
            name: "Imperium - White Scars",
            catalog: "Imperium - White Scars.cat",
        },
        // Leagues of Votann
        {
            name: "Leagues of Votann",
            catalog: "Leagues of Votann.cat",
        },
        // Library - Astartes Heresy Legends
        {
            name: "Library - Astartes Heresy Legends",
            catalog: "Library - Astartes Heresy Legends.cat",
        },
        // Library - Titans
        {
            name: "Library - Titans",
            catalog: "Library - Titans.cat",
        },
        // Necrons
        {
            name: "Necrons",
            catalog: "Necrons.cat",
        },
        // Orks
        {
            name: "Orks",
            catalog: "Orks.cat",
        },
        // T'au Empire
        {
            name: "T'au Empire",
            catalog: "T'au Empire.cat",
        },
        // Tyranids
        {
            name: "Tyranids",
            catalog: "Tyranids.cat",
        },
        // Unaligned Forces
        {
            name: "Unaligned Forces",
            catalog: "Unaligned Forces.cat",
        },
    ]);
    const [selectedForces, setSelectedForces] = createSignal([{}]);

    async function handleSelectChange(e: any) {
        const catalogue: string = e.target.value;
        if (catalogue === "Select one") {
            setSelectedForces([{}]);
            return;
        }

        await readXML(catalogue).then((res) => {

            // initialize empty array
            let selectedEntries: Array<object> = [];
            let arrayPath: string = "";

            // check if entryLink property exists
            if (res.catalogue.entryLinks === undefined) {
                arrayPath = "res.catalogue.sharedSelectionEntries.selectionEntry";
                // logError("No entryLinks property found.");

                // data is contained inside res.catalogue.sharedSelectionEntries.selectionEntry
                // console.log(res.catalogue.sharedSelectionEntries.selectionEntry);
                
            } else {
                // console.log('entryLinks property found');
                // console.log(res.catalogue.entryLinks.entryLink);
                arrayPath = "res.catalogue.entryLinks.entryLink";
            }


            /**
             * TODO:
             * split this into two functions
             * one for entryLinks
             * one for sharedSelectionEntries
             * 
             * this seems to be the primary difference in catalogues
             */


            // check if res.catalogue.entryLinks.entryLink exists
            if (res.catalogue.entryLinks.entryLink !== undefined) {
                const entryLinks: Array<object> =
                    res.catalogue.entryLinks.entryLink;
                const selectionEntries: Array<object> =
                    res.catalogue.sharedSelectionEntries.selectionEntry;

                // for each object inside entryLinks, find object in selectionEntries
                // with id matching targetId
                // then, push that object into a new array
                const selectedEntries: Array<any> = [];
                entryLinks.forEach((entryLink: any) => {
                    const entryId: string = entryLink.targetId;
                    const selectedEntry: any = selectionEntries.find(
                        (selectionEntry: any) => selectionEntry.id === entryId,
                    );
                    if (
                        selectedEntry &&
                        (selectedEntry.type === "model" ||
                            selectedEntry.type === "unit")
                    ) {
                        selectedEntries.push(selectedEntry);
                    }
                });

                // sort selectedEntries by name
                selectedEntries.sort((a: any, b: any) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }

            if (!selectedEntries) {
                logError("No selected entries found.");
            }

            setSelectedForces(selectedEntries);
        });
    }

    return (
        <form>
            <Row class="mb-3">
                <Col class="mb-3 col-12">
                    <label
                        for="forceSelectForm"
                        class="form-label"
                    >
                        Select Forces
                    </label>
                    <select
                        class="form-select form-select-lg"
                        name="forceSelectForm"
                        id="forceSelectForm"
                        onInput={handleSelectChange}
                    >
                        <option selected>Select one</option>
                        <For each={forces()}>
                            {(forces) => (
                                <option value={forces.catalog}>
                                    {forces.name}
                                </option>
                            )}
                        </For>
                    </select>
                </Col>
            </Row>
            <Show when={selectedForces().length > 1}>
                <Row class="mb-3">
                    <Col class="mb-3 col-12">
                        <UnitSelect units={selectedForces()} />
                    </Col>
                </Row>
            </Show>
        </form>
    );
}

export default ForceSelect;
