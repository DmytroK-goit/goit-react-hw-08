import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { slideInFromRight } from "../motion/motion";
import { motion } from "framer-motion";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromRight()}
    >
      <form
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl: flex gap-8 flex-col bg-amber-500 p-10 rounded-2xl mb-10 border-solid border-2 border-black"
        style={{
          boxShadow: "15px 15px 10px rgb(190, 126, 30)",
          backgroundColor: " burlywood",
        }}
      >
        <label className="w-3/4 flex flex-col " htmlFor={searchId}>
          Find contacts by name
          <input
            className="border-solid border-2 border-black"
            type="text"
            id={searchId}
            value={name}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
            placeholder="Enter search name"
          />
        </label>
      </form>
    </motion.div>
  );
};
export default SearchBox;
