import { useState } from "react";
import { nanoid } from "nanoid";
import { Label, Button, Input } from "./Form.styled";
import { useCreateContactMutation, useGetContactsQuery } from "redux/contactsApi";

export const Form = () => {
	const { data: contacts } = useGetContactsQuery();
	const [createContact] = useCreateContactMutation();
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const formChange = e => {
		const { name, value } = e.currentTarget;

		switch (name) {
			case 'name':
				setName(value)
				break;

			case 'number':
				setNumber(value)
				break;

			default:
				return
		}
	}

	const onSubmitClick = (e) => {
		e.preventDefault();

		if (chekExistContact(name)) { return }
		const contact = {
			id: nanoid(),
			name: name,
			number: number,
		}
		createContact(contact);
		setName('');
		setNumber('');
	}

	const chekExistContact = (newContact) => {
		if (contacts?.find(({ name }) => name === newContact)) {
			alert(`Contact ${newContact} already exist`)
			return true
		}
	}

	return (
		<>
			<form onSubmit={onSubmitClick} >
				<Label>
					Name
					<Input
						value={name}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						onChange={formChange}
					/>
				</Label>
				<Label>
					Number
					<Input
						value={number}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						onChange={formChange}
					/>
				</Label>
				<Button type="submit">Add contact</Button>
			</form>
		</>)
}