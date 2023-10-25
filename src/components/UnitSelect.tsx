import { Component } from "solid-js";
type Unit = {
    name: string;
    catalog: string;
};

const UnitSelect: Component<Unit> = (props) => {
    
  return (
    <>
    {props.name} - {props.catalog}
    </>
  );
};

export default UnitSelect;