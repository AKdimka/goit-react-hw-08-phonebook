import PropTypes from "prop-types";
import { DeleteBTN } from "./ContactsItem.styled";

export function ContactsItem({ id, name, number, deleteContact }) {
	return (
		<>
			<span>{name}:</span> <span>{number}</span>
			<DeleteBTN onClick={() => deleteContact(id)}>X</DeleteBTN>
		</>
	)
}

ContactsItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	deleteContact: PropTypes.func.isRequired,
}