import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 py-4 border-b-2 border-indigo-600">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="flex items-center">
          <Image
            height={50}
            width={50}
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
          <span className="ml-4 font-bold text-2xl text-indigo-600">
            Crypto
          </span>
        </a>

        <div className="">
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-indigo-600 ease-in duration-300 hover:-translate-y-1"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 ease-in duration-300"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
