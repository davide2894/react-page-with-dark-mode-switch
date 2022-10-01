import "./Main.scss";

export default function Main(props) {
  const classNames = `main ${props.darkMode ? "main--dark": ""}`;

  return (
    <main className={classNames}>
        <div className="main__textContainer">
          <h1 className="main__title">Fun facts about React</h1>
          <ul className="main__facts facts">
              <li className="facts__li">Was first released in 2013</li>
              <li className="facts__li">Was originally created by Jordan Walke</li>
              <li className="facts__li">Has well over 100K stars on GitHub</li>
              <li className="facts__li">Is maintained by Facebook</li>
              <li className="facts__li">Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
    </main>
  )
}
