import { Section } from "./Section/Section";
import { Form } from "./Form/Form"
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { MainContainer } from "./App.styled";

export function App() {
	/*
	const filtredContacts = () => {
		const normalizefFilter = filter.toLowerCase();
		return contacts.filter(contact => contact.name.toLowerCase().includes(normalizefFilter))
	} */

	return (
		<MainContainer>
			<Section title="Phonebook">
				<Form />
			</Section>
			<Section title="Contacts">
				<Filter />
				<Contacts />
			</Section>
		</MainContainer>
	);
}
