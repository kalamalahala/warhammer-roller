import { Component } from "solid-js";
import { Col } from "solid-bootstrap";

type Characteristics = {
    name: string;
    typeId: string;
    text: string;
};

const CharacteristicBlock: Component<Characteristics> = (props: Characteristics) => {

    const name = props.name;
    const typeId = props.typeId;
    const text = props.text;
    
  return (
    <Col class="p-1 bg-primary bg-gradient mx-1 shadow rounded text-center" id={typeId}>
        <div class="characteristicName text-white h3"><strong>{name}</strong></div>
        <div class="characteristicValue text-white h5">{text}</div>
    </Col>
  );
};

export default CharacteristicBlock;