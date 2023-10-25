import { Component, For } from "solid-js";

type UnitInfoProps = {
    unit: any;
};

type UnitProfile = {
    hidden?: string;
    name: string;
    typeId: string;
    typeName?: string;
    id: string;
    characteristics: {
        characteristic: any;
    };
};

const UnitInfo: Component<UnitInfoProps> = (props: UnitInfoProps) => {
    const unit: any = props.unit;
    const costs: any = unit.costs.cost;
    const profiles: [UnitProfile] = unit.profiles.profile;

    return (
        <div>
            <h4>{unit.name}</h4>
            <small>
                {costs.value} {costs.name}
            </small>
            <For each={profiles}>
                {(profile: UnitProfile) => (
                    <div>
                        <h5>{profile.name}</h5>
                        <ul>
                            <For each={profile.characteristics.characteristic}>
                                {(characteristic: any) => (
                                    <li>
                                        <strong>{characteristic.name}</strong>{" "}
                                        {characteristic.text}
                                    </li>
                                )}
                            </For>
                        </ul>
                        <p>{profile.characteristics.characteristic.text}</p>
                    </div>
                )}
            </For>
        </div>
    );
};

export default UnitInfo;

