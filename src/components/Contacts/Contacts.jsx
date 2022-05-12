import { ContactsList, ListItem } from "./Contacts.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";

export const Contacts = () => {
	const filterValue = useSelector(state => state.contacts.filter)
	const contacts = useSelector(state => state.contacts.items);

	const normalizefFilter = filterValue.toLowerCase();

	const filtredContacts = contacts.filter(contact => contact.name.includes(normalizefFilter))

	return (
		<>
			{filtredContacts && <ContactsList>
				{filtredContacts.map(({ id, name, number }) => (
					<ListItem key={id}>
						<ContactsItem id={id} name={name} number={number} />
					</ListItem>
				))}
			</ContactsList>}
		</>
	)
}