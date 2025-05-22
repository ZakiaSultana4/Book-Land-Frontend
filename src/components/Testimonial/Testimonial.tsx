const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Discover what our happy readers have to say about their experiences at Book Bliss.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-3">
          <figure className="rounded-md flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-red-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-red-700 shadow-lg">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                A Haven for Book Lovers
              </h3>
              <p className="my-4">
                "Book Bliss is truly a haven for book lovers. The collection is vast and varied, catering to all tastes. The user experience is seamless, making it easy to find and purchase my favorite books."
              </p>
              <p className="my-4">
                "The recommendations are spot on, and I always find something new and exciting to read. Highly recommended for anyone who loves books!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Emily Johnson</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Avid Reader
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-md flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-red-200 md:p-12 dark:bg-gray-800 dark:border-red-700 shadow-lg">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Exceptional Customer Service
              </h3>
              <p className="my-4">
                "The customer service at Book Bliss is exceptional. They are always ready to help with any queries and provide personalized recommendations that never disappoint."
              </p>
              <p className="my-4">
                "I appreciate the prompt responses and the genuine care they show for their customers. It makes shopping for books a delightful experience."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Michael Brown</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Book Enthusiast
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-md flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-red-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-red-700 shadow-lg">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Fast and Reliable Delivery
              </h3>
              <p className="my-4">
                "I am thoroughly impressed with the fast and reliable delivery service at Book Bliss. My orders always arrive on time and in perfect condition."
              </p>
              <p className="my-4">
                "Knowing that I can count on timely delivery makes Book Bliss my go-to place for all my book purchases."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Sarah Williams</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Frequent Shopper
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-md flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-red-200 md:p-12 dark:bg-gray-800 dark:border-red-700 shadow-lg">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                A Treasure Trove of Books
              </h3>
              <p className="my-4">
                "Book Bliss is a treasure trove of books. Whether I'm looking for the latest releases or classic literature, I always find what I need."
              </p>
              <p className="my-4">
                "The website is easy to navigate and the search functionality is top-notch. It's a joy to shop here."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>David Smith</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Literature Lover
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Show more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;