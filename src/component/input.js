function Input({ name, changeHandler, cssClassName, value }) {
  console.log(name, value);
  return (
    <input
      onChange={changeHandler}
      id={name}
      name={name}
      className={cssClassName}
      type="text"
      value={value}
      data-testid={name}
    />
  );
}
export default Input;
