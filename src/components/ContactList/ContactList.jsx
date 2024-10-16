import Contact from "../Contact/Contact";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <h2
        className="text-xl my-20 shadow-1xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black"
        style={{ boxShadow: "15px 15px 10px rgb(190, 126, 30)" }}
      >
        Contacts List : {contacts.length} contacts.
      </h2>
      <ul className="grid gap-4 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {contacts.map((contact) => (
          <li className="w-full" key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
