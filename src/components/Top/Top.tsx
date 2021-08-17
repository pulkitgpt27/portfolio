import React from "react";
import "./Top.scss";

const Top: React.FC = () => {
  const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (buttonRef.current) {
        buttonRef.current.style.visibility = "visible";
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.style.visibility = "hidden";
      }
    }
  }
  window.onscroll = function() {
    scrollFunction();
  };
  window.onload = function() {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <button onClick={TopEvent} id="topButton" title="Go to top" ref={buttonRef}>
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
};

export default Top;
