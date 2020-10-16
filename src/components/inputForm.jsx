import React from "react";
import styles from "./inputForm.module.css";

const InputForm = (props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const newItem = inputRef.current.value;
    newItem && props.handleSubmit(newItem);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="add something new :-) "
      ></input>
      <button className={styles.button}>ADD</button>
    </form>
  );
};

export default InputForm;
