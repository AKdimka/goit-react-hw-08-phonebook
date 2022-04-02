import { Component } from "react";
import { Section } from "./Section/Section";
import { Form } from "./Form/Form"
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";
import { MainContainer } from "./App.styled";

import initialContacts from "./contacts.json";

export class App extends Component {
	state = {
		contacts: initialContacts,
		name: "",
		number: "",
		filter: "",
	}

	formChange = e => {
		const { name, value } = e.currentTarget;

		this.setState({
			[name]: value.trim(),
		})
	}

	submitForm = e => {
		e.preventDefault();

		const contact = {
			id: nanoid(),
			name: this.state.name,
			number: this.state.number,
		}

		const normalizedContactName = contact.name.toLowerCase;

		if (this.state.contacts.find(({ name }) => name.toLowerCase === normalizedContactName)) {
			alert(`Contact ${contact.name} already exist`)
			return true
		}

		this.setState(({ contacts }) => (
			{ contacts: [contact, ...contacts] }))

		this.setState({ name: "", number: "" })
	}

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== contactId)
		}))
	}

	changeFilter = e => {
		const { name, value } = e.currentTarget;

		this.setState({
			[name]: value.trim(),
		})
	}

	render() {
		const { contacts, filter } = this.state;
		const normalizefFilter = filter.toLowerCase();
		const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizefFilter));

		return (
			<MainContainer>
				<Section title="Phonebook">
					<Form onFormSubmit={this.submitForm} onFormChange={this.formChange} />
				</Section>
				<Section title="Contacts">
					<Filter filterChange={this.changeFilter} value={filter} />
					<Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact} />
				</Section>
			</MainContainer>
		);
	}
};
