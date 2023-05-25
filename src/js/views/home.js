import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Formulario from "../component/form.jsx";
import ContactList from "../component/contactList.jsx";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store } = useContext(Context)

	return (
		<>
			<div className="text-center mt-5 container">
				<Formulario />
			</div>
			<div className="container">
				Contacts
				{store.contacts &&
					store.contacts.map((contact, index) => {
						console.log(contact)
						return <ContactList key={index} contact={contact} />;
					})}
			</div>
		</>
	);
};
