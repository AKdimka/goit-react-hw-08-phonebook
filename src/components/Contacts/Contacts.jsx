import { useEffect } from "react";
import { ContactsList, ListItem } from "./Contacts.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/store";

export const Contacts = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(state => state.contacts.filter);
	const contacts = useSelector(state => state.contacts.items);


	const filtredContacts = contacts.filter(contact => contact.name.includes(filterValue))

	useEffect(() => {
		console.log('render contacts useEffect');
		const localContacts = localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(localContacts);
		parsedContacts.map(contact => dispatch(addContact(contact)));
	}, [])

	useEffect(() => {
		console.log('contacts change useEffect');
		localStorage.setItem('contacts', JSON.stringify(contacts))
	}, [contacts])

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