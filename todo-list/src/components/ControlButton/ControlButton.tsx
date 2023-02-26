import classNames from "classnames";
import styles from "./ControlButton.module.scss";
import { ControlButtonProps } from "../../types/types";

function ControlButton({ children, className, ...props }: ControlButtonProps) {
  const stylesBtn = classNames(className, styles.controlBtn);
  return (
    <button type="button" {...props} className={stylesBtn}>
      {children}
    </button>
  );
}

export default ControlButton;
