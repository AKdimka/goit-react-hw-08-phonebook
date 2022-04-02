import { Component } from "react";

export class Form extends Component {
	state = {
		name: "",
		number: "",
	}

	formChange = (e) => {
		const { name, value } = e.currentTarget;

		this.setState({
			[name]: value.trim(),
		})

		setTimeout(() => console.log(this.state), 1)
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onFormSubmit(this.state)
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} >
				<label style={{
					display: 'flex',
					flexDirection: 'column'
				}}>
					Name
					<input
						value={this.state.name}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						onChange={this.formChange}
					/>
				</label>
				<label style={{
					display: 'flex',
					flexDirection: 'column'
				}}>
					Number
					<input
						value={this.state.number}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						onChange={this.formChange}
					/>
				</label>
				<button type="submit">Add contact</button>
			</form>)
	}
}