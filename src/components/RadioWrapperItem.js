import React, { useState } from "react";

function RadioWrapperItem({ item }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    const value = e.target.value;

    // Eğer tıklanan değer zaten seçiliyse, boş yaparak seçimi kaldır
    if (selectedOption === value) {
      setSelectedOption("");
    } else {
      setSelectedOption(value);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="option"
          value={item}
          checked={selectedOption === item}
          onChange={handleOptionChange}
          className="form-radio w-2.5 h-2.5 text-dark-purple border-[1px] border-dark-purple appearance-none checked:bg-dark-purple rounded-full"
        />
        <span className="text-[13px] text-dark-text font-medium text-md">
          {item}
        </span>
      </label>
    </div>
  );
}

export default RadioWrapperItem;
