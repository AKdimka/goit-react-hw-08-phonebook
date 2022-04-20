import { Section } from "./Section/Section";
import { Form } from "./Form/Form"
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";
import { MainContainer } from "./App.styled";
import { useState, useEffect } from 'react';

import initialContacts from "./contacts.json";

export function App() {
	const [contacts, setContacts] = useState(initialContacts);
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const contacts = localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contacts);

		setContacts(parsedContacts)
	}, [])

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts))
	}, [contacts])

	const submitForm = (name, number) => {
		if (chekExistContact(name)) { return }
		const contact = {
			id: nanoid(),
			name: name,
			number: number,
		}

		setContacts(state => [contact, ...state])
	}

	const deleteContact = contactId => {
		setContacts(contacts.filter(contact => contact.id !== contactId))
	}

	const filtredContacts = () => {
		const normalizefFilter = filter.toLowerCase();
		return contacts.filter(contact => contact.name.toLowerCase().includes(normalizefFilter))
	}

	const chekExistContact = (newContact) => {
		if (contacts.find(({ name }) => name === newContact)) {
			alert(`Contact ${newContact} already exist`)
			return true
		}
	}

	return (
		<MainContainer>
			<Section title="Phonebook">
				<Form
					onFormSubmit={submitForm} />
			</Section>
			<Section title="Contacts">
				<Filter setFilter={setFilter} value={filter} />
				<Contacts contacts={filtredContacts()} onDeleteContact={deleteContact} />
			</Section>
		</MainContainer>
	);
}
