import { Component } from "react";
import { Label, Button, Input } from "./Form.styled";

export class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.onFormSubmit} >
				<Label>
					Name
					<Input
						value={this.props.name}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						onChange={this.props.onFormChange}
					/>
				</Label>
				<Label>
					Number
					<Input
						value={this.props.number}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						onChange={this.props.onFormChange}
					/>
				</Label>
				<Button type="submit">Add contact</Button>
			</form>)
	}
}