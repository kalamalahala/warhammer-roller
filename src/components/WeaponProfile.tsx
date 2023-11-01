import { For, Index } from "solid-js";

type WeaponProfileProps = {
  weapons: {
    selectionEntry: Weapon[];
  }
};

type WeaponProfile = any;

type Weapon = {
  name: string;
  profiles: {
    profile: [{
      characteristics: {
        characteristic: [{
          name: string;
          typeId: string;
          text: string;
        }];
        name: string;
        typeName: string;
        id: string;
        typeId: string;
      }
    }]
  };
  infoLinks: {
    infoLink: [{
      name: string;
      targetId: string;
      id: string;
      type: string;
    }]
  }
}

const WeaponProfile: WeaponProfile = (props: WeaponProfileProps) => {

    const weapons: Weapon[] = props.weapons.selectionEntry;
    console.log("WeaponProfile component");
    console.log(weapons);

    let weaponsArray: Weapon[] = [];

    if (weapons !== undefined && weapons.length > 0) {
    // loop over weapons
    for (let i = 0; i < weapons.length; i++) {
      let constructor: Weapon = {
        name: weapons[i].name,
        profiles: weapons[i].profiles,
        infoLinks: weapons[i].infoLinks
      }
      weaponsArray.push(constructor);
    }  
  }

    return (
        <div>
          <For each={weaponsArray}>
            {(weapon: Weapon, _i) => (
              <div>
                <h3>{weapon.name}</h3>
                <For each={weapon.profiles.profile}>
                  {(profile: any, _i) => (
                    <div>
                      <h4>{profile.name}</h4>
                      <For each={profile.characteristics.characteristic}>
                        {(characteristic: any, _i) => (
                          <div>
                            <h5>{characteristic.name}</h5>
                            <p>{characteristic.text}</p>
                          </div>
                        )}
                      </For>
                    </div>
                  )}
                </For>
              </div>
            )}
            </For>
        </div>
    );
};

export default WeaponProfile;
