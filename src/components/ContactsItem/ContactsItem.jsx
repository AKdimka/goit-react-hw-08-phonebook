import { DeleteBTN } from "./ContactsItem.styled";
import { useDispatch } from "react-redux";
import { deliteContact } from "redux/contactsSlice";
import { PropTypes } from "prop-types";

export const ContactsItem = ({ id, name, number }) => {
	const dispatch = useDispatch();

	return (
		<>
			<span>{name}:</span> <span>{number}</span>
			<DeleteBTN onClick={() => dispatch(deliteContact(id))}>X</DeleteBTN>
		</>
	)
}
ContactsItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};