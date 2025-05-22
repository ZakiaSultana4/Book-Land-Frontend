import { Bell, Search, User } from "lucide-react";
const DasahboardTopBar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-8 w-[90%] mx-auto mt-5">
        <div className="flex items-center h-12 bg-white rounded-lg px-4 py-2 w-96 shadow-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="ml-2 outline-none h-full"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasahboardTopBar;
