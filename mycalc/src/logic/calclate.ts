export type Operator = "+" | "-";
export type NumberCode =
"0" |
"1" |
"2" |
"3" |
"4" |
"5" |
"6" |
"7" |
"8" |
"9";
export type ButtonCode = NumberCode | Operator | "." | "D" | "AC" | "=";

export function calculate(button: ButtonCode, state: State): State {
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    }
  }
  if (isNumberButton(button)) {
    return handleNumberButton(button, state)
  }
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state)
  }
  if (isDotButton(button)) {
    return handleDotButton(state)
  }
  if (isDeleteButton(button)) {
    return handleDeleteButton(state)
  }
  if (isAllClearButton(button)) {
    return handleAllClearButton()
  }
  if (isEqualButton(button)) {
    return handleEqualButton(state)
  }
  return state;
}

export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

// 型ガードの構文
// True を表した場合、この button は number code だよ、となる！
// すごい！
function isNumberButton(button: string): button is NumberCode {
  return (
    button === "0" || 
    button === "1" ||
    button === "2" ||
    button === "8" ||
    button === "9"
  );
}

/**
 * 数字キーが押された時の状態変化
 * 
 * @param button 
 * @param state 
 * @returns 
 */
function handleNumberButton(button: NumberCode, state: State): State {
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    }
  }
  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  }
}

function isOperatorButton(button: string): button is Operator {
  return (
    button === "+" ||
    button === "-"
  )
}

function handleOperatorButton(button: Operator, state: State): State {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
    }
  }
  const nextValue = operate(state)
  return {
    current: `${nextValue}`,
    operand: parseFloat(state.current),
    operator: button,
    isNextClear: true,
  }
}


function isDotButton(button: string) {
  return button === ".";
}

function handleDotButton(state: State): State {
  // すでにドットが存在する場合
  if (state.current.indexOf('.') !== -1) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  }
}


function isDeleteButton(button: string) {
  return button === "D";
}

function handleDeleteButton(state: State): State {
  if (state.current.length === 1) {
    return {
      current: "0",
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    }
  }
  return {
    current: state.current.substring(0, state.current.length - 1),
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  }
}


function isAllClearButton(button: string) {
  return button === "AC";
}

function handleAllClearButton(): State {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  }
}


function isEqualButton(button: string) {
  return button === "=";
}

function handleEqualButton(state: State): State {
  if (state.operator === null) {
    return state
  }
  const nextValue = operate(state)
  return {
    current: `${nextValue}`,
    operand: 0,
    operator: null,
    isNextClear: false,
  }
}



function operate(state: State): number {
  const current = parseFloat(state.current);
  if (state.operator === "+") {
    return state.operand + current;
  }
  if (state.operator === "-") {
    return state.operand - current;
  }
  return current;
}

