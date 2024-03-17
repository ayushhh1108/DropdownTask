import React, { useState } from "react";
import "./index.css";
const DropDown = () => {
  const options = [
    { id: 1, label: "Page 1" },
    { id: 2, label: "Page 2" },
    { id: 3, label: "Page 3" },
    { id: 4, label: "Page 4" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionId) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(optionId)) {
        return prevSelectedOptions.filter((id) => id !== optionId);
      } else {
        return [...prevSelectedOptions, optionId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      const allOptionIds = options.map((option) => option.id);
      setSelectedOptions(allOptionIds);
    }
  };

  return (
    <div className="dropdown">
      <div className="multiselect-dropdown">
        <div
          className={
            isOpen ? "selected-options border-bottum-0" : "selected-options"
          }
        >
          {isOpen ? (
            <div className="option" onClick={handleSelectAll}>
              <span className="checkmark">Select All Pages</span>
              <input
                type="checkbox"
                className="checkbox"
                checked={selectedOptions.length === options.length}
                onChange={handleSelectAll}
              />
            </div>
          ) : (
            <div className="placeholder option" onClick={toggleDropdown}>
              Select Pages
            </div>
          )}
        </div>
        {isOpen && (
          <div className="options">
            <div className="options-div">
              {options.map((option) => (
                <label key={option.id} className="option">
                  <span className="checkmark">{option.label}</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => handleOptionClick(option.id)}
                  />
                </label>
              ))}
            </div>
            <div className="button-div">
              <button onClick={toggleDropdown} className="done-button">
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
