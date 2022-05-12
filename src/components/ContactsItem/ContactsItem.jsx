import { DeleteBTN } from "./ContactsItem.styled";
import { useDispatch } from "react-redux";
import { deliteContact } from "redux/store";

export const ContactsItem = ({ id, name, number }) => {
	const dispatch = useDispatch();
	return (
		<>
			<span>{name}:</span> <span>{number}</span>
			<DeleteBTN onClick={() => dispatch(deliteContact(`${id}`))}>X</DeleteBTN>
		</>
	)
}