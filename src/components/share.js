import React from "react";
import shareIcon from "./images/shareIcon.png";

function ShareButton() {
  const share = () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: "From Valaakam",
          url: currentUrl
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  return (
    <button onClick={share} className="shareIcon">
      <img src={shareIcon} alt="Share" />
    </button>
  );
}

export default ShareButton;
