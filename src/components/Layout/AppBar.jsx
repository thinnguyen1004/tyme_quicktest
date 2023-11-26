import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { publicRouteData } from "../../configs/route.config";
import { NavLink, useLocation } from "react-router-dom";

function AppBar() {
  const location = useLocation();

  const index = publicRouteData.findIndex(
    (item) => item.path === location.pathname
  );
  return (
    <Header
      style={{
        background: "#17161AB2",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Menu
        mode="horizontal"
        className="bg-transparent "
        defaultSelectedKeys={[index.toString()]}
      >
        {publicRouteData?.map((item, index) => (
          <Menu.Item
            key={index}
            icon={item.icon}
            className="border-b-0 color-red-300"
          >
            <NavLink
              to={item.path}
              activeClassName="selected"
              style={{ fontSize: "18px" }}
            >
              {item.title}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default AppBar;
