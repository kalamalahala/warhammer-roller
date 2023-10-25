import { Row, Col } from "solid-bootstrap";
import { Component, For, createSignal, Show } from "solid-js";
import UnitInfo from "./UnitInfo";

const UnitSelect: Component<any> = (props) => {
    const [selectedUnit, setSelectedUnit] = createSignal("");

    async function handleUnitSelect(e: any) {
        setSelectedUnit("");
        const unitId: string = e.target.value;

        if (unitId === "Select a Unit") {
            setSelectedUnit("");
            return false;
        }

        // find the unit in the props.units array
        // and set it to selectedUnit
        await updateSelected(unitId);
    }

    async function updateSelected(unitId: string) {
        setSelectedUnit(props.units.find((unit: any) => unit.id === unitId));
        console.log(selectedUnit());
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
                <Row class="mb-3 p-0 justify-content-center">
                    <Col class="col-12">
                        <UnitInfo unit={selectedUnit()} />
                    </Col>
                </Row>
            </Show>
        </>
    );
};

export default UnitSelect;
