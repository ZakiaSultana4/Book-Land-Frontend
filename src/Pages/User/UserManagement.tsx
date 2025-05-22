
import React, { useState } from "react";

import moment from "moment";
import { useGetCustomerOrdersQuery } from "../../Redux/Features/Orders/Order.api";
import { TransactionDetails } from "../../Types/global";

import UpdatePasswordForm from "./UpdatePasswordForm";
const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("manageOrder");
  const { data: Orders } = useGetCustomerOrdersQuery(undefined, {
    skip: activeTab !== "manageOrder",
  });
  console.log(Orders);
  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  console.log(Orders);
  return (
    <section className="mt-3 lg:ml-3">
      <ul className="flex gap-3 bg-gray-100 rounded-xl p-1 overflow-hidden">
        <li
          id="manageOrder"
          className={`tab ${
            activeTab === "manageOrder"
              ? "bg-transparent border-b-2 border-[#e12503] text-[#e12503] shadow-sm"
              : "text-gray-600 font-semibold"
          }  text-center text-sm py-2.5 px-4 tracking-wide cursor-pointer`}
          onClick={() => handleTabClick("manageOrder")}
        >
          My Orders
        </li>
        <li
          id="profile-settings"
          className={`tab ${
            activeTab === "profile-settings"
              ? "bg-transparent border-b-2 border-[#e12503] text-[#e12503] shadow-sm"
              : "text-gray-600 font-semibold"
          }  text-center text-sm py-2.5 px-4 tracking-wide cursor-pointer`}
          onClick={() => handleTabClick("profile-settings")}
        >
          Profile Settings
        </li>
      </ul>
      {/* User settings */}
      <div
        className={`tab-content bg-white lg:px-8 lg:py-4 rounded-md mt-3 lg:mt-8 ${
          activeTab === "profile-settings" ? "block" : "hidden"
        }`}
      >
        <UpdatePasswordForm />
      </div>
      {/* Manage Order */}
      <div
        className={`tab-content bg-white px-3 lg:px-8 lg:py-4 rounded-md  mt-8 ${
          activeTab === "manageOrder" ? "block" : "hidden"
        }`}
      >
        <div className="container px-4 mx-auto">
          <p className="text-[18px] mb-4">
            Manage Order ({Orders?.data?.length})
          </p>
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  {Orders?.data?.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Order ID
                          </th>
                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Customer Email
                          </th>
                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Order Status
                          </th>
                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Total Price
                          </th>
                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Ordered At
                          </th>
                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <span className="">Transaction Method</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {Orders?.data?.map(
                          ({
                            user,
                            _id,
                            status,
                            totalPrice,
                            createdAt,
                            transaction,
                          }: TransactionDetails) => (
                            <tr key={_id}>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <span>{transaction?.id}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {user?.email}
                              </td>
                              <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div
                                  className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 `}
                                >
                                  <h2 className="text-sm font-normal">
                                    {status || transaction?.transactionStatus}
                                  </h2>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <span>${totalPrice}</span>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {moment(createdAt).format("YYYY-MM-DD")}
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                  <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                    {transaction?.method}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  ) : (
                    <div className="w-full h-56 flex justify-center items-center font-bold text-base lg:text-2xl">
                      You currently don't  have any order! 😔
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserManagement;
