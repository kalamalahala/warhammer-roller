type SelectionEntryComponent = any;

const SelectionEntry: SelectionEntryComponent = (SelectionEntryProps: any) => {

    const selectionEntry: any = SelectionEntryProps;
    console.log("SelectionEntry component");
    console.log(selectionEntry);
  
  return <div> selection Entries!</div>;

}
export default SelectionEntry;

/*

        selectionEntries will contain one or an array of selectionEntry objects
        We need to collect the profile or profile[] from each selectionEntry
        As well as the infoLinks or infoLinks[] from each selectionEntry
        
      <selectionEntries>
        <selectionEntry id="be79-7c87-f13b-b20" name="Putrid vomit" hidden="false" collective="false" import="true" type="upgrade">
          <constraints>
            <constraint field="selections" scope="parent" value="1" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="dd93-948b-3773-2a84" type="min"/>
            <constraint field="selections" scope="parent" value="1" percentValue="false" shared="true" includeChildSelections="false" includeChildForces="false" id="af01-fa8b-a569-f61c" type="max"/>
          </constraints>
          <profiles>
            <profile id="94a0-91ef-2f49-7ee" name="Putrid vomit" hidden="false" typeId="f77d-b953-8fa4-b762" typeName="Ranged Weapons">
              <characteristics>
                <characteristic name="Range" typeId="9896-9419-16a1-92fc">12&quot;</characteristic>
                <characteristic name="A" typeId="3bb-c35f-f54-fb08">D6+3</characteristic>
                <characteristic name="BS" typeId="94d-8a98-cf90-183e">N/A</characteristic>
                <characteristic name="S" typeId="2229-f494-25db-c5d3">5</characteristic>
                <characteristic name="AP" typeId="9ead-8a10-520-de15">-2</characteristic>
                <characteristic name="D" typeId="a354-c1c8-a745-f9e3">1</characteristic>
                <characteristic name="Keywords" typeId="7f1b-8591-2fcf-d01c">Ignores Cover, Torrent</characteristic>
              </characteristics>
            </profile>
          </profiles>
          <infoLinks>
            <infoLink id="bca3-269e-80cc-3bdb" name="Ignores Cover" hidden="false" targetId="4640-43e7-30b-215a" type="rule"/>
            <infoLink id="2513-7335-18-3c91" name="Torrent" hidden="false" targetId="5edf-d619-23e0-9b56" type="rule"/>
          </infoLinks>
          <costs>
            <cost name="pts" typeId="51b2-306e-1021-d207" value="0"/>
          </costs>
        </selectionEntry>
      </selectionEntries>
      <selectionEntryGroups>

      */