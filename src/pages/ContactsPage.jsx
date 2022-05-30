import { Section } from "../components/Section/Section";
import { Form } from "../components/Form/Form"
import { ContactsList } from "../components/ContactsList/ContactsList";
import { Filter } from "../components/Filter/Filter";
import { contactsOperations } from "redux/contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ContactsPage() {
	const dispatch = useDispatch();

	useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
	return (
		<>
			<Section title="Phonebook">
				<Form />
			</Section>
			<Section title="Contacts">
				<Filter />
				<ContactsList />
			</Section>
		</>
	)
}