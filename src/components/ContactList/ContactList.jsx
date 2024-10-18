import Contact from "../Contact/Contact";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { motion } from "framer-motion";
import { slideInFromRight } from "../motion/motion";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="p-5">
      <ContactForm />
      <SearchBox />

      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromRight()}
        className="text-xl my-20 shadow-1xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black"
        style={{ boxShadow: "15px 15px 10px rgb(190, 126, 30)" }}
      >
        Contacts List : {contacts.length} contacts.
      </motion.h2>

      <ul className="grid gap-4 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {contacts.map((contact) => (
          <li className="w-full" key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
