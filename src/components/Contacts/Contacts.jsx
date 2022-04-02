import { Component } from "react";
import { ContactsList, ListItem, DeleteBTN } from "./Contacts.styled";
import propTypes from "prop-types";

export class Contacts extends Component {
	render() {
		return (
			<ContactsList>
				{this.props.contacts.map(({ name, id, number }) =>
					<ListItem key={id}>
						<span>{name}:</span> <span>{number}</span>
						<DeleteBTN onClick={() => this.props.onDeleteContact(id)}>X</DeleteBTN>
					</ListItem>)}
			</ContactsList>
		)
	}
}

Contacts.propTypes = {
	contacts: propTypes.arrayOf(propTypes.object),
}