import './App.css';
import styles from "./App.module.css";
import ButtonsContainer from './components/ButtonsContainer';
//import Display from "./components/display";
import Display from "./components/Display";
import { useState } from "react";


//<input className={styles.display} type="text" />

function App() {

  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>


      <div className={styles.buttonsContainer}>
        <center>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer
            onButtonClicked={onButtonClick}
          ></ButtonsContainer>

        </center>
      </div>

    </div>
  )
}

export default App
