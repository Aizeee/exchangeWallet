import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
export default function SidebarComponent() {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem routerLink={<Link to="/" />}> Home </MenuItem>
        <MenuItem routerLink={<Link to="/dashboard" />}> Dashboard </MenuItem>
      </Menu>
    </Sidebar>
  );
}
