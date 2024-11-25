import PropTypes from "prop-types";
import "./button1.css";

const Button1 = ({ type = "button", onClick = () => {}, children }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
};

Button1.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button1;
