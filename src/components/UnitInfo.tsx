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

function orderProfiles(profiles: any) {
    let updatedProfiles: UnitProfile[] = [];
    let pendingEntries: UnitProfile[] = [];
    
    for (let i = 0; i < profiles.length; i++) {
        // if property exists
        if (profiles[i].characteristics.characteristic[0] !== undefined && profiles[i].characteristics.characteristic[0].hasOwnProperty("name")) {
            updatedProfiles.push(profiles[i]);
        } else {
            pendingEntries.push(profiles[i]);
        }
    }

    for (let i = 0; i < pendingEntries.length; i++) {
        updatedProfiles.push(pendingEntries[i]);
    }

    return updatedProfiles;
}

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
            <For each={orderProfiles(profiles)}>
                {(profile: UnitProfile) => (
                    <div class="mb-1">
                        <h5>{profile.name}</h5>
                        <ul class="unitStats g-3 m-0 p-0">
                            <For each={profile.characteristics.characteristic}>
                                {(characteristic: any) => (
                                    <li>
                                        <strong>{characteristic.name}</strong>
                                        &nbsp;&nbsp;&nbsp;{characteristic.text}
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
