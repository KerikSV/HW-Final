import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const [operand1, setOperand1] = useState("0");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [isResult, setIsResult] = useState(false);

  const hadleNum = (label) => {
    if (operator === "") {
      if (operand1 === "0") {
        setOperand1(label);
      } else {
        setOperand1(operand1 + label);
      }
    } else {
      if (operand2 === "0") {
        setOperand2(label);
      } else {
        setOperand2(operand2 + label);
      }
    }
    setIsResult(false);
  };

  const handleReset = () => {
    setOperand1("0");
    setOperator("");
    setOperand2("");
    setIsResult(false);
  };

  const handlePlus = () => {
    setOperator("+");
    setIsResult(false);
  };
  const handleMinus = () => {
    setOperator("-");
    setIsResult(false);
  };
  const hadleRes = () => {
    if (operand2 !== "") {
      switch (operator) {
        case "+": {
          setOperand1(Number(operand1) + Number(operand2));
          break;
        }
        case "-": {
          setOperand1(Number(operand1) - Number(operand2));
          break;
        }
        default:
        //nothing doit
      }

      setOperand2("");
    }
    setOperator("");
    setIsResult(true);
  };

  const buttons = [
    { id: "1", label: "1", group: "left", handler: hadleNum },
    { id: "2", label: "2", group: "left", handler: hadleNum },
    { id: "3", label: "3", group: "left", handler: hadleNum },
    { id: "4", label: "4", group: "left", handler: hadleNum },
    { id: "5", label: "5", group: "left", handler: hadleNum },
    { id: "6", label: "6", group: "left", handler: hadleNum },
    { id: "7", label: "7", group: "left", handler: hadleNum },
    { id: "8", label: "8", group: "left", handler: hadleNum },
    { id: "9", label: "9", group: "left", handler: hadleNum },
    { id: "0", label: "0", group: "left", handler: hadleNum },
    { id: "+", label: "+", group: "right", handler: handlePlus },
    { id: "-", label: "-", group: "right", handler: handleMinus },
    { id: "=", label: "=", group: "right", handler: hadleRes },
    { id: "C", label: "C", group: "right", handler: handleReset },
  ];

  const output = operand1 + operator + operand2;

  return (
    <div className={styles.app}>
      <div
        className={`${styles.screen} ${isResult ? styles.resultScreen : ""}`}
      >
        {output}
      </div>
      <div className={styles.buttons}>
        <div className={styles.leftGroup}>
          {buttons.map(({ id, label, group, handler }) =>
            group === "left" ? (
              <button
                key={id}
                className={styles.button}
                onClick={() => handler(label)}
              >
                {label}
              </button>
            ) : null
          )}
        </div>
        <div className={styles.rightGroup}>
          {buttons.map(({ id, label, group, handler }) =>
            group === "right" ? (
              <button key={id} className={styles.button} onClick={handler}>
                {label}
              </button>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
