import "../styles/header.css";

const Header = ({ text }) => {
  // console.log(text.title);
  return (
    <header>
      <span className="title">
        <img src={"/public/logo.png"} alt="logo" />
        {text.title}
      </span>

      <nav>
        <ul>
          {text.links.map((item, index) => (
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
