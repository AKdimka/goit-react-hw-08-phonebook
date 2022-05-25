import { DeleteBTN, ContactImg, ContactContent/* , CallBtn */ } from "./ContactsItem.styled";
import { PropTypes } from "prop-types";
import { useDeleteContactMutation } from "redux/contactsApi";

export const ContactsItem = ({ id, img, name, number }) => {
	const [deleteContact/* , { isLoading: isDeleting } */] = useDeleteContactMutation();
	/* 	const normStr = number.split('-').join("");
		console.log(normStr);
		const hrefString = `tel:+${normStr}`; */

	return (
		<>
			{img && <ContactImg src={img} alt={name} />}
			<ContactContent>
				<span>{name}:</span>
				<span>{number}</span>
			</ContactContent>
			<DeleteBTN onClick={() => deleteContact(id)}>X</DeleteBTN>
			{/* <CallBtn href={hrefString}>Call</CallBtn> */}
		</>
	)
}

ContactsItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};