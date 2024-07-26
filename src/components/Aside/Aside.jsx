import "./aside.css";

const Aside = () => {
  const asideIcons = [
    { src: "/public/medias/yoga.png", alt: "yoga" },
    { src: "/public/medias/swim.png", alt: "swim" },
    { src: "/public/medias/bike.png", alt: "bike" },
    { src: "/public/medias/alter.png", alt: "alter" }
  ];

  return (
    <aside>
      <nav>
        <ul>
          {asideIcons.map((item, index) => (
            <li key={index}>
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </nav>

      <span className="copyright">Copiryght, SportSee 2020</span>
    </aside>
  );
};

export default Aside;
