import PropTypes from "prop-types";
import { ListItem, DeleteBTN } from "./ContactsItem.styled";

export function ContactsItem({ key, name, number, deleteContact }) {
	return (
		<ListItem key={key}>
			<span>{name}:</span> <span>{number}</span>
			<DeleteBTN onClick={() => deleteContact(key)}>X</DeleteBTN>
		</ListItem>
	)
}

ContactsItem.propTypes = {
	key: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	deleteContact: PropTypes.func.isRequired,
}