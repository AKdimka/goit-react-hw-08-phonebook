import { DeleteBTN } from "./ContactsItem.styled";
import { PropTypes } from "prop-types";
import { useDeleteContactMutation } from "redux/contactsApi";

export const ContactsItem = ({ id, img, name, number }) => {
	const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

	return (
		<>
			{/* {img && <img src={img} alt={name} />} */}
			<span>{name}:</span> <span>{number}</span>
			<DeleteBTN onClick={() => deleteContact(id)}>X</DeleteBTN>
			{isDeleting && console.log(isDeleting)}
		</>
	)
}
ContactsItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};