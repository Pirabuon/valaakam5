import React from "react";
import { useHistory } from "react-router-dom";

function ReturnButton() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return <button onClick={handleClick}>முந்தைய பக்கம்</button>;
}
export default ReturnButton;
