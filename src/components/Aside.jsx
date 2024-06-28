import "../styles/aside.css";

const Aside = ({ labels }) => {
  const imgs = [
    { src: "/public/yoga.png", alt: "yoga" },
    { src: "/public/swim.png", alt: "swim" },
    { src: "/public/bike.png", alt: "bike" },
    { src: "/public/alter.png", alt: "alter" },
  ];

  return (
    <aside>
      <nav>
        <ul>
          {imgs.map((item, index) => (
            <li key={index}>
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </nav>

      <span className="copyright">{labels.copyright}</span>
    </aside>
  );
};

export default Aside;
