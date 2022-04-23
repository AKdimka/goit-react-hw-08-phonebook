import { useState } from "react";
import { Label, Button, Input } from "./Form.styled";
import PropTypes from "prop-types";

export const Form = ({ onFormSubmit }) => {
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

		onFormSubmit(name, number)

		setName('')
		setNumber('')
	}

	return (
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
		</form>)
}


Form.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,
}