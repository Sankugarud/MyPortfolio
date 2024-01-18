import React, { useState } from "react";
import Switch from "react-switch";

const SwitchBar = ({setChange,change}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (newChecked) => {
    if(change){
      setChange(false)
    }else{
      setChange(true)
    }
    setChecked(newChecked);
  };

  return (
    <label className="flex gap-3 align-middle">
      {change ? <span>Trader</span> : <span>Developer</span>}
      
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
};

export default SwitchBar;
