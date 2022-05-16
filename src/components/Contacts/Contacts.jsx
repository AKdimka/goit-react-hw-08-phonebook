import { ContactsList, ListItem } from "./Contacts.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getFilter, getContacts } from "redux/contactsSlice";

export const Contacts = () => {
	const filterValue = useSelector(getFilter);
	const contacts = useSelector(getContacts);

	const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))

	return (
		<>
			{filtredContacts && <ContactsList>
				{filtredContacts.map(({ id, name, number }) => (
					<ListItem key={id}>
						<ContactsItem
							id={id}
							name={name}
							number={number} />
					</ListItem>
				))}
			</ContactsList>}
		</>
	)
}