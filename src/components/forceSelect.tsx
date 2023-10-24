import { For, createSignal } from "solid-js";
import readXML from "../readxml";

function ForceSelect() {
    const [forces, setForces] = createSignal([
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

    function handleSelectChange(e: any) {
        let output: any = readXML(e.target.value);
        console.log("output", output);
    }

    return (
        <form>
            <div class="mb-3">
                <label for="forceSelectForm" class="form-label">
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
                        {(forces, i) => (
                            <option value={forces.catalog}>
                                {forces.name}
                            </option>
                        )}
                    </For>
                </select>
            </div>
        </form>
    );
}

export default ForceSelect;
