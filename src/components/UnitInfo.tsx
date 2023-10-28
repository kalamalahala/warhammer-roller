import { Component, For } from "solid-js";
import { Row } from "solid-bootstrap";
import CharacteristicBlock from "./CharacteristicBlock";

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
        if (
            profiles[i].characteristics.characteristic[0] !== undefined &&
            profiles[i].characteristics.characteristic[0].hasOwnProperty("name")
        ) {
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
    const profiles: [UnitProfile] = unit.profiles.profile;

    return (
        <div>
            <For each={orderProfiles(profiles)}>
                {(profile: UnitProfile) => (
                    <div class="mb-1">
                        <h5>{profile.name}</h5>
                        <Row>
                            <For each={profile.characteristics.characteristic}>
                                {(characteristic: any) => (
                                    <CharacteristicBlock
                                        name={characteristic.name}
                                        typeId={characteristic.typeId}
                                        text={characteristic.text}
                                    />
                                )}
                            </For>
                        </Row>
                        <p>{profile.characteristics.characteristic.text}</p>
                    </div>
                )}
            </For>
        </div>
    );
};

export default UnitInfo;
