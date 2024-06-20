import "../styles/aside.css";
import { GrYoga } from "react-icons/gr";
import { BiSwim } from "react-icons/bi";
import { MdDirectionsBike } from "react-icons/md";
import { LiaDumbbellSolid } from "react-icons/lia";

const Aside = ({ labels }) => {
  return (
    <aside>
      <nav>
        {/* <ul>
          {labels.links.map((item, index) => (
            <li key={index}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={item} fill="#FF0101" />
              </svg>
            </li>
          ))}
        </ul> */}

        <ul>
          <li><GrYoga /></li>
          <li><BiSwim /></li>
          <li><MdDirectionsBike /></li>
          <li><LiaDumbbellSolid /></li>
        </ul>
      </nav>

      <span className="copyright">{labels.copyright}</span>
    </aside>
  );
};

export default Aside;
