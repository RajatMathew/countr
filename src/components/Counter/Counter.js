import { useState, useEffect } from "react";

import "../../css/Main.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [hw, sethw] = useState(180);
  const [clr, setColor] = useState();
  const [xyz, setXYZ] = useState();

  const colors = [
    "#1D976C",
    "#EB3349",
    "#DD5E89",
    "#4CB8C4",
    "#1FA2FF",
    "#1D2B64",
    "#FF512F",
    "#1A2980",
    "#AA076B",
    "#FF512F",
  ];

  const colors2 = [
    "#93F9B9",
    "#F45C43",
    "#F7BB97",
    "#3CD3AD",
    "#12D8FA",
    "#1D2B64",
    "#F09819",
    "#26D0CE",
    "#61045F",
    "#DD2476",
  ];

  const getRandomColor = () => {
    const rand = Math.random();
    return (
      "linear-gradient(" +
      colors[Math.floor(colors.length * rand)] +
      ", " +
      colors2[Math.floor(colors2.length * rand)] +
      ")"
    );
  };

  useEffect(() => {
    setColor(getRandomColor());
    document.getElementsByClassName("centered")[0].style.background = clr;

    sethw((prev) => prev + 3);

    setXYZ("display:block;width:" + hw + "px;height:" + hw + "px;");
    document.getElementsByClassName("circle")[0].setAttribute("style", xyz);

    // alert(getRandomColor());
  }, [counter]);
  return (
    <div className="full-h-box">
      <div className="centered-main-text">
        <h5 className="main-text">countr.</h5>
      </div>
      <div className="centered">
        <button
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
          className="btn"
        >
          <i class="lni lni-minus incdec"></i>
        </button>
        <div className="counter-holder">
          <h1 className="counter-var">{counter}</h1>
        </div>
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
          className="btn"
        >
          <i class="lni lni-plus incdec"></i>
        </button>
      </div>
      <div className="circle"></div>
      
    </div>
  );
};

export default Counter;
