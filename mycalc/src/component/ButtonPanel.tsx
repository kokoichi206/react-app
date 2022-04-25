export default function ButtonPanel(props: {
  buttonHandler: (code: string)=>void;
}) {
  return (
    <div>
      <div>
        <button onClick={() => props.buttonHandler("7")}>7</button>
        <button onClick={() => props.buttonHandler("8")}>8</button>
        <button onClick={() => props.buttonHandler("9")}>9</button>
        <button onClick={() => props.buttonHandler("AC")}>AC</button>
      </div>
      <div>
        <button onClick={() => props.buttonHandler("4")}>4</button>
        <button onClick={() => props.buttonHandler("5")}>5</button>
        <button onClick={() => props.buttonHandler("6")}>6</button>
        <button onClick={() => props.buttonHandler("-")}>-</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div>
        <button>0</button>
        <button>.</button>
        <button>D</button>
        <button>=</button>
      </div>
    </div>
  );
}