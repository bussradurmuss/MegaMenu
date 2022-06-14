import React, { useEffect, useState } from "react";
import "./Menu.css";
import PhoneIcon from "@mui/icons-material/Phone";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuItems, setMegaMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/menus")
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <div className="mega-menu">
      <div className="menubar-left">
        <nav className="maga-menu-nav">
          <div className="wrapper">
            <ul className="nav-links">
              {menu.map((item) => (
                <li
                  className="drop"
                  key={item.id}
                  onClick={() => {
                    if (item.sub_menus) {
                      setMenuOpen(!menuOpen);
                      setMegaMenuItems(item.sub_menus);
                    }
                    console.log(item.id);
                  }}
                >
                  <a href={item.link}>{item.menu_name}</a>
                </li>
              ))}
            </ul>
            {menuOpen && (
              <ul className="mega-menu-open">
                {megaMenuItems.map((sub_item, index) => (
                  <li key={index}>
                    <a href={"/"}>{sub_item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>

      <div className="menubar-right">
        <PhoneIcon></PhoneIcon>
        <a href="tel:707-425-2137">707-425-2137</a>
      </div>
    </div>
  );
};

export default Menu;
