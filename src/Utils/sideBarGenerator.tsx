import { NavLink } from "react-router-dom";
import { TRoutes } from "../Types/global";

const sideBarGenerator = (routes: TRoutes[]) => {
  const sideBarItems = routes.map((route) => {
    if (route.path && route.name) {
      return {
        key: route.path,
        label: <NavLink to={route.path || ""}>{route.name}</NavLink>,
      };
    }
    return null;
  });
  return sideBarItems.filter((item) => item !== null);
};

export default sideBarGenerator;
