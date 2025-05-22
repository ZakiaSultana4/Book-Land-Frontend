import { Button } from "antd";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { IResponseBook } from "../../Types/global";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const NewArrival = () => {
  const { data: AllBooks } = useGetAllBooksQuery(undefined);
  const [activeCategory, setActiveCategory] = useState("all");

  // Extract categories dynamically from books
  const categories = useMemo(() => {
    if (!AllBooks?.data) return [{ id: "all", label: "All" }];

    const uniqueCategories = Array.from(
      new Set(AllBooks.data.map((book: IResponseBook) => book.category))
    );

    return [{ id: "all", label: "All" }].concat(
      uniqueCategories.map((cat) => ({
        id: (cat as string).toLowerCase().replace(/\s+/g, ""),
        label: cat as string,
      }))
    );
  }, [AllBooks]);

  // Filter books by active category
  const filteredBooks = useMemo(() => {
    if (activeCategory === "all") return AllBooks?.data || [];
    return (
      AllBooks?.data.filter(
        (book: IResponseBook) =>
          book.category.toLowerCase().replace(/\s+/g, "") === activeCategory
      ) || []
    );
  }, [activeCategory, AllBooks]);

  // Show only first 6 books initially
  const displayedBooks = filteredBooks.slice(0, 8);

  return (
    <section className="my-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full max-w-[1400px] mx-auto">
      <div className="flex justify-center items-center flex-col gap-3 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">NEW ARRIVALS</h2>
        <div className="w-20 h-[5px] bg-pink-500 rounded" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center my-10 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative rounded-full px-5 py-2 text-sm sm:text-base font-semibold transition-colors duration-300
              ${
                activeCategory === cat.id
                  ? "text-pink-500"
                  : "text-pink-500/70 border border-pink-500/40 hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/10"
              }
              focus:outline-none focus-visible:outline-2 focus-visible:outline-pink-500`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeCategory === cat.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-pink-500/20 rounded-full z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book: IResponseBook) => <Card key={book._id} book={book} />)
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center my-8">
        <Link to="/all-books">
          <Button className="bg-pink-500 text-white px-6 py-2 rounded shadow-md hover:bg-pink-600 transition">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrival;
