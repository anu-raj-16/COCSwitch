import React, { useState } from "react";
import "./dropdown.css";

function DropDown(props) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.onValueChange(event.target.value);
  };

  return (
    <select id="dropdownButton" value={selectedValue} onChange={handleChange}>
      Select COC
      <option value="">--Please choose an option--</option>
      <option value="Brevicon 0.5/35">Brevicon 0.5/35</option>
      <option value="Brevicon 1/35">Brevicon 1/35</option>
      <option value="Tri-Cira">Tri-Cira</option>
      <option value="Tri-Jordyna">Tri-Jordyna</option>
      <option value="Ovima">Ovima</option>
      <option value="Portia">Portia</option>
      <option value="Triquilar">Triquilar</option>
      <option value="Zamine">Zamine</option>
      <option value="Apri">Apri</option>
      <option value="Freya">Freya</option>
      <option value="Mirvala">Mirvala</option>
      <option value="Tricira-Lo">Tricira-Lo</option>
      <option value="Linessa">Linessa</option>
      <option value="Alysena">Alysena</option>
      <option value="Aviane">Aviane</option>
      <option value="Audrina">Audrina</option>
      <option value="Mya">Mya</option>
      <option value="Lolo">Lolo</option>
    </select>
  );
}

export default DropDown;
