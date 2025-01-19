import "./Form.css";
import { useState } from "react";
import SelectButton from "./components/SelectButton";

function Form() {
  const [selectedSymptom, setSelectedSymptom] = useState('');

  const getChangedSymptom = (value) => {
    setSelectedSymptom(value);
  }

  const handleSubmit = (e) => {
    if (!selectedSymptom) {
      alert("must select symptom first");
      return;
    }
    else {
      e.preventDefault();
      alert(selectedSymptom);
      console.log('Form submitted with button value: ', selectedSymptom);
    }
  }

  return (
  <>
    <form>
      <SelectButton
        value={selectedSymptom}
        onValueChange={getChangedSymptom}
      />
      <button onClick={handleSubmit}> Submit </button>
    </form>
  </>
  );
}
export default Form;
