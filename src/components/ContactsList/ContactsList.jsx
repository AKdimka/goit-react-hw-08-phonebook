import { Contacts, ListItem } from "./ContactsList.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { contactsSelectors } from '../../redux/contacts';
import { Loader } from "components/Loader/Loader";

export const ContactsList = () => {
	const isFetching = useSelector(contactsSelectors.getLoading);
	const contacts = useSelector(contactsSelectors.getContacts);
	const filterValue = useSelector(contactsSelectors.getFilter);
	const filtredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filterValue))

	return (
		<>
			{isFetching && <Loader />}
			{contacts && <Contacts>
				{filtredContacts.map(({ id, avatar, name, number }) => (
					<ListItem key={id}>
						<ContactsItem
							id={id}
							img={avatar}
							name={name}
							number={number} />
					</ListItem>
				))}
			</Contacts>}
		</>
	)
}