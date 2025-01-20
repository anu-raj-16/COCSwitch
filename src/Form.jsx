import "./Form.css";
import { useState } from "react";
import SelectButton from "./components/SelectButton";
import DropDown from "./components/DropDown";
import {
  get_nausea_switch,
  get_bloating_switch,
  get_weight_fatigue_switch,
  get_vasomotor_switch,
} from "/sorting.js";
import { useNavigate } from "react-router-dom";

function Form() {
  const [selectedSymptom, setSelectedSymptom] = useState("");

  const getChangedSymptom = (value) => {
    setSelectedSymptom(value);
  };

  const [selectedMed, setSelectedMed] = useState("");

  const [newMed, setNewMed] = useState("");

  const getChangedMed = (value) => {
    setSelectedMed(value);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!selectedSymptom || !selectedMed) {
      alert("must select symptom and patient's current medication first");
      return;
    } else {
      e.preventDefault();
      let newMed;
      // stores object of medication to switch to in newMed if available, else stores -1 in newMed
      if (selectedSymptom === "nausea") {
        newMed = get_nausea_switch(selectedMed);
      } else if (selectedSymptom === "bloating") {
        newMed = get_bloating_switch(selectedMed);
      } else if (selectedSymptom === "vasomotor") {
        newMed = get_vasomotor_switch(selectedMed);
      } else {
        newMed = get_weight_fatigue_switch(selectedMed);
      }

      if (newMed) {
        setNewMed(newMed);
        // Navigate to the result page and pass newMed.Name
        sessionStorage.setItem("canAccessResult", "true");
        navigate("/COCSwitch/result", { state: { result_med: newMed.Name } });
      } else {
        setNewMed("-1");
        sessionStorage.setItem("canAccessResult", "true");
        // Navigate to the result page with -1 as the value indicating no suitable medication
        navigate("/COCSwitch/result", { state: { result_med: "-1" } });
      }
    }
  };

  return (
    <>
      <header className="form_header">Medication Alternative Form</header>
      <form className="form_container">
        <p>1. Select the symptom that the patient is experiencing due to current COC</p>
        <SelectButton onValueChange={getChangedSymptom} />
        <p>2. Select the medication the patient is currently taking</p>
        <DropDown onValueChange={getChangedMed} />
        <button className="submit_button" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
        <footer className="disclaimer-form">
      *This tool is a proof of concept for a hackathon and is not intended for medical use. The content and logic displayed on this page are purely fictional and for entertainment purposes only, and should not be construed as medical advice in any way. Always consult a licensed healthcare professional for medical decisions.
      </footer>
      </form>
    </>
  );
}

export default Form;
