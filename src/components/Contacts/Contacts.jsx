import { ContactsList, ListItem } from "./Contacts.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";

export const Contacts = () => {
	const contacts = useSelector(state => state.items);

	console.log(contacts);
	return (
		<>
			{contacts && <ContactsList>
				{contacts.map(({ id, name, number }) => (
					<ListItem key={id}>
						<ContactsItem id={id} name={name} number={number} />
					</ListItem>
				))}
			</ContactsList>}
		</>
	)
}