import { Component } from "solid-js";

type WeaponProfileProps = {};

const WeaponProfile: Component<{}> = (props: WeaponProfileProps) => {

    const weapons: any = props;
  
  return <div><pre>{weapons}</pre></div>;
};

export default WeaponProfile;