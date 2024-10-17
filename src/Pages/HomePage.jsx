import "animate.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { Link } from "react-router-dom";
const Home = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center">
      <img
        src="https://www.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e.png"
        alt="Home Page Example"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-center text-white">
        {isLoggedIn && (
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold animate-textColorChange">
              {user.name}`s PhoneBook
            </h1>
            <Link
              to="/contactlist"
              className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Let`s GO
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
