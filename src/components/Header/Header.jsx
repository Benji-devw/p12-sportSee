import "./header.css";

const Header = () => {
  const headerLinks = ["Accueil", "Profil", "Réglage", "Communauté"]
  return (
    <header>
      <span className="title">
        <img src={"/logo.png"} alt="logo" />
        SportSee
      </span>

      <nav>
        <ul>
          {headerLinks.map((item, index) => (
            <span key={index}>
              <a>{item}</a>
            </span>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
