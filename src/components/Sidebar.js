import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  const menus = [
    { name: "메뉴", path: "/" },
    { name: "이용안내", path: "/info" },
    { name: "게임검색", path: "/search" },
    { name: "추천게임", path: "/best" },
    { name: "WI-FI", path: "/wifi" },
    { name: "이벤트", path: "/events" },
    { name: "고객소리", path: "/voice" },
  ];

  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem menu={menu} />
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
