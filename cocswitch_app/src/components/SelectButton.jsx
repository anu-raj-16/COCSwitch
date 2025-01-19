import React, { useState } from 'react';
import './SelectButton.css'

function SelectButton(props) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        props.onValueChange(event.target.value);
    };

    return (
        <div className="radio-container">
            <div className="radio-group">
                <label className={selectedValue === 'nausea' ? 'selected' : 'unselected'}>
                    <input
                    type="radio"
                    name="symptom"
                    value="nausea"
                    checked={selectedValue === 'nausea'}
                    onChange={handleChange}
                    />
                    Nausea
                </label>
                <label className={selectedValue === 'fatigue' ? 'selected' : 'unselected'}>
                    <input
                    type="radio"
                    name="symptom"
                    value="fatigue"
                    checked={selectedValue === 'fatigue'}
                    onChange={handleChange}
                    />
                    Fatigue
                </label>
                <label className={selectedValue === 'bloating' ? 'selected' : 'unselected'}>
                    <input
                    type="radio"
                    name="symptom"
                    value="bloating"
                    checked={selectedValue === 'bloating'}
                    onChange={handleChange}
                    />
                    Bloating
                </label>
            </div>
            <div className="radio-group">
                <label className={selectedValue === 'vasomotor' ? 'selected' : 'unselected'}>
                    <input
                    type="radio"
                    name="symptom"
                    value="vasomotor"
                    checked={selectedValue === 'vasomotor'}
                    onChange={handleChange}
                    />
                    Vasomotor
                </label>
                <label className={selectedValue === 'weight-gain' ? 'selected' : 'unselected'}>
                    <input
                    type="radio"
                    name="symptom"
                    value="weight-gain"
                    checked={selectedValue === 'weight-gain'}
                    onChange={handleChange}
                    />
                    Weight Gain
                </label>
            </div>
        </div>
      );
}

export default SelectButton;