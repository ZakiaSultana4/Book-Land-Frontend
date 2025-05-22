import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { getUser, logOut } from "../../Redux/Features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
const UserDropdown = () => {
  const user = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "2") {
      dispatch(logOut());
    } else if (e.key === "1") {
      navigate(`/${user?.role}/dashboard`);
    }
  };
  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full text-lg font-semibold">
              AI
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
          </div>
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserDropdown;
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "My Dasboard",
  },
  {
    key: "2",
    label: "Logout",
  },
];
