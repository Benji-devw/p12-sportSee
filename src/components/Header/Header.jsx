import "./header.css";

const Header = () => {
  const links = ["Accueil", "Profil", "Réglage", "Communauté"]
  return (
    <header>
      <span className="title">
        <img src={"/logo.png"} alt="logo" />
        SportSee
      </span>

      <nav>
        <ul>
          {links.map((item, index) => (
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
