import "./Form.css";
import { useState } from "react";
import SelectButton from "./components/SelectButton";
import DropDown from "./components/DropDown";
import {get_nausea_switch, get_bloating_switch, get_weight_fatigue_switch, get_vasomotor_switch} from "/sorting.js";

function Form() {
  const [selectedSymptom, setSelectedSymptom] = useState('');

  const getChangedSymptom = (value) => {
    setSelectedSymptom(value);
  }

  const [selectedMed, setSelectedMed] = useState('');

  const [newMed, setNewMed] = useState('');

  const getChangedMed = (value) => {
    setSelectedMed(value);
  }

  const handleSubmit = (e) => {
    if (!selectedSymptom || !selectedMed) {
      alert("must select symptom and patient's current medication first");
      return;
    }

    else {
      e.preventDefault();
      let newMed;
      // stores object of medication to switch to in newMed if available, else stores -1 in newMed
      if (selectedSymptom === "nausea") {
        newMed = get_nausea_switch(selectedMed);
      }
      else if (selectedSymptom === "bloating") {
        newMed = get_bloating_switch(selectedMed);
      }
      else if (selectedSymptom === "vasomotor") {
        newMed = get_vasomotor_switch(selectedMed);
      }
      else {
        newMed = get_weight_fatigue_switch(selectedMed);
      }

      if (newMed) {
        setNewMed(newMed);
      }
      else {
        setNewMed(-1);
      }
    }
  }

  return (
  <>
    <form>
      <SelectButton
        onValueChange={getChangedSymptom}
      />
      <DropDown
        onValueChange={getChangedMed}
      />

      <button onClick={handleSubmit}> Submit </button>
    </form>
  </>
  );
}

export default Form
