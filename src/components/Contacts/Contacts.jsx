import { ContactsList, ListItem, DeleteBTN } from "./Contacts.styled";
//import { ContactsItem } from "components/ContactsItem/ContactsItem";
import PropTypes from "prop-types";

export function Contacts({ contacts, onDeleteContact }) {
	return (
		<ContactsList>
			{contacts.map(({ id, name, number }) =>
				<ListItem key={id}>
					<span>{name}:</span> <span>{number}</span>
					<DeleteBTN onClick={() => onDeleteContact(id)}>X</DeleteBTN>
				</ListItem>)}
		</ContactsList>
	)
}

Contacts.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object),
	onDeleteContact: PropTypes.func.isRequired,
}