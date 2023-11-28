export default function Button({ children, mode = "filled", Icon, ...props }) {
  let styleClass = `button ${mode}-button`;

  //...props est un objet il va faire ça : let props = {className : "button, mode: "filled"}
  if (Icon) {
    styleClass += " icon-button";
    console.log("styleClass1", styleClass);
  }
  if (props.className) {
    styleClass += " " + props.className;
    console.log("styleClass2", styleClass);
  }

  return (
    <button className={styleClass} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
