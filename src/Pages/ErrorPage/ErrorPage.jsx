import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <div className="bg-yellow-200">
      <section className="flex items-center h-screen p-16 bg-yellow-100 text-gray-900">
        <Helmet>
          <title>Error Page | Monchobi Art School </title>
        </Helmet>
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <img
            className="w-[50%]"
            src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
            alt=""
          />
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-gradient-to-bl from-orange-400 to-red-600 text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
