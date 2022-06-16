import "./Navbar.scss";
import logoIcon from "../../assets/icons/logo-icon.svg";

function Navbar(props) {
  const classNames = `navbar ${props.darkMode ? "navbar--dark": ""}`;

  return (
    <nav 
      className={classNames}
    >
      <img 
          className="logo__icon"
          src={logoIcon}
      />
      
      <div 
          className="toggler" 
      >
          <p className="toggler__light">Light</p>
          <div 
              className="toggler__slider"
              onClick={props.toggleDarkMode}
          >
              <div className="toggler__sliderCircle"></div>
          </div>
          <p className="toggler__dark">Dark</p>
      </div>
    </nav>
  )
}

export default Navbar;