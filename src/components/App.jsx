import { Component } from "react";
import { Section } from "./Section/Section";
import { Form } from "./Form/Form"
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";
//import { MainContainer } from "./App.styled";

export class App extends Component {
	state = {
		contacts: [
			{ id: "id-1", name: "Firefighters", number: "101" },
			{ id: "id-2", name: "Police", number: "102" },
			{ id: "id-3", name: "Ambulance", number: "103" },
			{ id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-5', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-6', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-7', name: 'Annie Copeland', number: '227-91-26' },],
	}

	submitForm = (data) => {
		const contact = {
			id: nanoid(),
			...data,
		}

		this.setState(({ contacts }) => (
			{ contacts: [contact, ...contacts] }))
	}

	filtredContacts = (seach) => {
		const filtred = this.state.contacts.filter(contact => contact.name == seach)

		console.log(filtred);
	}

	render() {
		return (
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				fontSize: 20,
				textTransform: 'uppercase',
			}}>
				<Section title="Phonebook">
					<Form onFormSubmit={this.submitForm} />
				</Section>
				<Section title="Contacts">
					<Filter filter={this.filtredContacts} />
					<Contacts contacts={this.state.contacts} />
				</Section>
			</div >
		);
	}
};
