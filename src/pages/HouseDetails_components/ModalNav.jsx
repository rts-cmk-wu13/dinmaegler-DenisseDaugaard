import { NavLink, Link } from "react-router"
import { IoLayersOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FaRegImage } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function ModalNav() {

    return (
        <>
        <nav>
  <ul className="flex p-4 gap-3">
    <li>
      <NavLink to="housecarousel">
        {({ isActive }) => (
          <FaRegImage
            className={`text-2xl modal__icon ${
              isActive ? "text-[var(--greycolor)] scale-110" : "text-yellow-50"
            }`}
          />
        )}
      </NavLink>
    </li>

    <li>
      <NavLink to="housefloorplant">
        {({ isActive }) => (
          <IoLayersOutline
            className={`text-2xl modal__icon ${
              isActive ? "text-[var(--greycolor)] scale-110" : "text-yellow-50"
            }`}
          />
        )}
      </NavLink>
    </li>

    <li>
      <NavLink to="houselocation">
        {({ isActive }) => (
          <GrLocation
            className={`text-2xl modal__icon ${
              isActive ? "text-[var(--greycolor)] scale-110" : "text-yellow-50"
            }`}
          />
        )}
      </NavLink>
    </li>

    <li>
      <button className="text-2xl">
        <GrFavorite className="modal__icon text-yellow-50" />
      </button>
    </li>
  </ul>
</nav>

        </>
    )
}