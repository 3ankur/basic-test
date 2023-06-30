import { useEffect, useState } from "react";
import Button from "./component/button";
import Input from "./component/input";

const MAX_LIMIT = 100;
function Main() {
  const [counterState, setCounterState] = useState({
    counter: 0,
    isInvalid: false,
    isIncrementBtnDisable: false,
    isDecrementBtnDisable: false,
    errorMsg: ""
  });

  const incrementHandler = () => {
    setCounterState((prev) => {
      const updaedNumber = prev?.counter + 1;
      if (updaedNumber > MAX_LIMIT) {
        return {
          ...prev,
          counter: MAX_LIMIT,
          isInvalid: true,
          isIncrementBtnDisable: true,
          errorMsg: `Value can not be greater then ${MAX_LIMIT}`
        };
      }

      return {
        ...prev,
        counter: prev.counter + 1,
        isInvalid: false,
        isIncrementBtnDisable: false,
        isDecrementBtnDisable: false,
        errorMsg: ""
      };
    });
  };

  const decrementHandler = () => {
    setCounterState((prev) => {
      if (prev?.counter > 0) {
        return {
          ...prev,
          counter: prev.counter - 1,
          isInvalid: false,
          isIncrementBtnDisable: false,
          isDecrementBtnDisable: false,
          errorMsg: ``
        };
      }

      return {
        ...prev,
        counter: 0,
        isInvalid: true,
        isIncrementBtnDisable: false,
        isDecrementBtnDisable: true,
        errorMsg: `Value can not be less then 0`
      };
    });
  };

  const onInputChangeHandler = (e) => {
    if (isNaN(e?.target.value)) {
      setCounterState((prev) => {
        return {
          ...prev,
          counter: "",
          isInvalid: true,
          isIncrementBtnDisable: true,
          isDecrementBtnDisable: false,
          errorMsg: `Not a valid Number`
        };
      });
      return;
    }
    setCounterState((prev) => {
      if (parseInt(e?.target.value, 10) > MAX_LIMIT) {
        return {
          ...prev,
          counter: MAX_LIMIT,
          isInvalid: true,
          isIncrementBtnDisable: true,
          isDecrementBtnDisable: false,
          errorMsg: `Value can not be greater then ${MAX_LIMIT}`
        };
      } else if (parseInt(e?.target.value, 10) < 0) {
        return {
          ...prev,
          counter: 0,
          isInvalid: true,
          isIncrementBtnDisable: false,
          isDecrementBtnDisable: true,
          errorMsg: `Value can not be less then 0`
        };
      } else {
        return {
          ...prev,
          counter: e?.target.value,
          isInvalid: true,
          isIncrementBtnDisable: false,
          isDecrementBtnDisable: false,
          errorMsg: ""
        };
      }
    });
  };

  return (
    <>
      <div className="counter">
        <Button
          clickHandler={incrementHandler}
          name="Increment"
          cssClassName="increment_button"
          isDisable={counterState?.isIncrementBtnDisable}
        />
        <Input
          name="inputbox"
          changeHandler={onInputChangeHandler}
          value={counterState?.counter}
          cssClassName={`input_element ${
            counterState?.isInvalid ? "invalid" : ""
          }`}
        />
        <Button
          clickHandler={decrementHandler}
          name="Decrement"
          cssClassName="decrement_button"
          isDisable={counterState?.isDecrementBtnDisable}
        />
      </div>
      {counterState?.errorMsg && (
        <div>
          <label className="errorMsg">{counterState?.errorMsg}</label>
        </div>
      )}
    </>
  );
}
export default Main;
