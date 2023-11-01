import { Row, Col } from "solid-bootstrap";
import { Component, For, createSignal, Show } from "solid-js";
import UnitInfo from "./UnitInfo";
import WeaponProfile from "./WeaponProfile";
import CategoryLinks from "./CategoryLinks";

const UnitSelect: Component<any> = (props) => {
    const [selectedUnit, setSelectedUnit] = createSignal("");
    const [selectedUnitCategories, setSelectedUnitCategories] = createSignal([]);
    const [selectedUnitWeapons, setSelectedUnitWeapons] = createSignal([])

    async function handleUnitSelect(e: any) {
        setSelectedUnit("");
        setSelectedUnitCategories([]);
        setSelectedUnitWeapons([]);
        const unitId = e.target.value;

        if (unitId === "Select a Unit") {
            setSelectedUnit("");
            setSelectedUnitCategories([]);
            setSelectedUnitWeapons([]);
            return false;
        }

        // find the unit in the props.units array
        // and set it to selectedUnit
        await updateSelected(unitId);
    }

    async function updateSelected(unitId: string) {
        let unit = props.units.find((unit: any) => unit.id === unitId);
        setSelectedUnit(unit);
        setSelectedUnitCategories(unit.categoryLinks.categoryLink);
        setSelectedUnitWeapons(unit.selectionEntries);
    }

    return (
        <>
            <Row class="mb-3 p-0 justify-content-center">
                <Col class="col-12">
                    <select
                        class="form-select"
                        onInput={handleUnitSelect}
                    >
                        <option selected>Select a Unit</option>
                        <For each={props.units}>
                            {(unit: any, _i) => (
                                <option value={unit.id}>{unit.name}</option>
                            )}
                        </For>
                    </select>
                </Col>
            </Row>
            <Show when={selectedUnit() != ""}>
                category links
                <Row class="mb-3 p-0 justify-content-center">
                    <Col>
                        <CategoryLinks categories={selectedUnitCategories()} />
                    </Col>
                </Row>
                <Row class="mb-3 p-0 justify-content-center">
                    unit info
                    <Col class="col-12">
                        <UnitInfo unit={selectedUnit()} />
                    </Col>
                </Row>
                <Row class="mb-3 p-0 justify-content-center">
                    <Col class="col-12">
                        <WeaponProfile weapons={selectedUnitWeapons()} />
                    </Col>
                </Row>
            </Show>
        </>
    );
};

export default UnitSelect;
