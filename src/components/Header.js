import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title }) => {
  return (
    <div className="header">
      <span>
        {" "}
        <FontAwesomeIcon icon="fa-solid fa-list-ul" />
      </span>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
