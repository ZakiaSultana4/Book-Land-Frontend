import { Checkbox, CheckboxProps, Select } from "antd";
import {
  useGetAllBooksQuery,
  useGetAuthorsQuery,
  useGetNumberOfCategoriesQuery,
} from "../../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import Card from "../../../components/Card/Card";
import { useState, useEffect } from "react";
import Search from "antd/es/input/Search";
import { IResponseBook } from "../../../Types/global";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";

interface IParams {
  [key: string]: string[] | undefined | string;
}

const AllBooks = () => {
  const [params, setParams] = useState<IParams>({});
  const { data: Categories } = useGetNumberOfCategoriesQuery(undefined);
  const { data: AllBooks, refetch } = useGetAllBooksQuery(params);
  const { data: authorList } = useGetAuthorsQuery(undefined);

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  const onChange: CheckboxProps["onChange"] = (e) => {
    const [name, value] = e.target.value.split("-");

    if (name === "range") {
      if (e.target.checked) {
        const [min, max] = value.split(",");
        setParams((prev) => ({
          ...prev,
          minPrice: min,
          maxPrice: max,
        }));
      } else {
        const removeMinMax = { ...params };
        delete removeMinMax.minPrice;
        delete removeMinMax.maxPrice;
        setParams(removeMinMax);
      }
    }

    setParams((prev) => {
      const newParams: { [key: string]: string | string[] | undefined } = {
        ...prev,
      };

      if (e.target.checked && name !== "range") {
        newParams[name] = [...(newParams[name] || []), value];
      } else {
        if (name !== "range" && Array.isArray(newParams[name])) {
          newParams[name] = Array.from(newParams[name] || []).filter(
            (item: string) => item !== value
          );
          if (newParams[name]?.length === 0) {
            delete newParams[name];
          }
        } else if (name !== "range" && !Array.isArray(newParams[name])) {
          newParams[name] = [value];
        }
      }

      return { ...newParams };
    });
  };

  return (
    <div className="w-[95%] mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-5">All Collection</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Section */}
        <div className="lg:col-span-1 p-5 border rounded-md shadow-sm bg-white">
          <h3 className="text-2xl font-semibold mb-4">Filter</h3>

          {/* Price Range */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Price Range</h4>
            <div className="flex flex-col gap-2 mt-2 px-2">
              <Checkbox onChange={onChange} value={"range-100,200"}>
                100$ - 200$
              </Checkbox>
              <Checkbox onChange={onChange} value={"range-200,300"}>
                200$ - 300$
              </Checkbox>
              <Checkbox onChange={onChange} value={"range-300,400"}>
                300$ - 400$
              </Checkbox>
              <Checkbox onChange={onChange} value={"range-400,500"}>
                400$ - 500$
              </Checkbox>
            </div>
          </div>
          <hr />

          {/* Availability */}
          <div className="my-4">
            <h4 className="text-lg font-semibold">Availability</h4>
            <div className="flex flex-col gap-2 mt-2 px-2">
              <Checkbox onChange={onChange} value={"inStock-true"}>
                In Stock
              </Checkbox>
              <Checkbox onChange={onChange} value={"inStock-false"}>
                Out of Stock
              </Checkbox>
            </div>
          </div>
          <hr />

          {/* Authors */}
          <div className="my-4">
            <h4 className="text-lg font-semibold">Author</h4>
            <div className="flex flex-col gap-2 mt-2 px-2">
              {authorList?.data?.map((author: { _id: string }) => (
                <Checkbox
                  key={author._id}
                  onChange={onChange}
                  value={`author-${author._id}`}
                >
                  {author._id}
                </Checkbox>
              ))}
            </div>
          </div>
          <hr />

          {/* Categories */}
          <div className="my-4">
            <h4 className="text-lg font-semibold">Category</h4>
            <div className="flex flex-col gap-2 mt-2 px-2">
              {Categories?.data?.map((category: { _id: string }) => (
                <Checkbox
                  key={category._id}
                  onChange={onChange}
                  value={`category-${category._id}`}
                >
                  {category._id}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div className="lg:col-span-3 w-full">
          {/* Search & Sort */}
          <div className="h-auto border border-gray-500/20 flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center p-4 rounded-md shadow-sm bg-white">
            <Search
              placeholder="Search Book e.g title"
              onSearch={(value) => setParams({ searchTerm: value })}
              style={{ width: "100%", maxWidth: 300 }}
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Select
                style={{ borderRadius: "5px", width: 150 }}
                defaultValue="Sort-by"
                options={[
                  { value: "h-t-l", label: "High to Low" },
                  { value: "l-t-h", label: "Low to High" },
                ]}
              />
              <span>{AllBooks?.data?.length} Books</span>
            </div>
          </div>

          {/* Book Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
            {AllBooks?.data?.length > 0 ? (
              AllBooks?.data?.map((book: IResponseBook) => (
                <Card key={book._id} book={book} />
              ))
            ) : (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
