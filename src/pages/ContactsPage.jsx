import { Section } from "../components/Section/Section";
import { Form } from "../components/Form/Form"
import { ContactsList } from "../components/ContactsList/ContactsList";
import { Filter } from "../components/Filter/Filter";

export default function ContactsPage() {
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