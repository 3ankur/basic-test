function Button({ name, clickHandler, cssClassName, isDisable = false }) {
  return (
    <button
      disabled={isDisable}
      className={cssClassName}
      id={name}
      onClick={clickHandler}
      data-testid={name}
    >
      {name}
    </button>
  );
}
export default Button;
