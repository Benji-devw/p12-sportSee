import "../styles/header.css";

const Header = ({ labels }) => {
  // console.log(labels.title);
  return (
    <header>
      <span className="title">
        <img src={"/logo.png"} alt="logo" />
        {labels.title}
      </span>

      <nav>
        <ul>
          {labels.links.map((item, index) => (
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
