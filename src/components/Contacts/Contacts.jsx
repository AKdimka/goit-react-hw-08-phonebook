import { ContactsList, ListItem } from "./Contacts.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import PropTypes from "prop-types";

export function Contacts({ contacts, onDeleteContact }) {
	return (
		<ContactsList>
			{contacts.map(({ id, name, number }) => (
				<ListItem key={id}>
					<ContactsItem id={id} name={name} number={number} deleteContact={onDeleteContact} />
				</ListItem>
			))}
		</ContactsList>
	)
}

Contacts.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object),
	onDeleteContact: PropTypes.func.isRequired,
}