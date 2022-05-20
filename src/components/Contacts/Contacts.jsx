import { ContactsList, ListItem } from "./Contacts.styled";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getFilter } from "redux/contactsSlice";
import { useGetContactsListQuery } from "redux/contactsApi";
import { Loader } from "components/Loader/Loader";

export const Contacts = () => {
	const { data: contacts, isFetching, isSuccess } = useGetContactsListQuery(null, {
		refetchOnFocus: true
	});
	const filterValue = useSelector(getFilter);
	const filtredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filterValue))

	return (
		<>
			{isFetching && <Loader />}
			{isSuccess && !isFetching && <ContactsList>
				{filtredContacts.map(({ id, avatar, name, phone }) => (
					<ListItem key={id}>
						<ContactsItem
							id={id}
							img={avatar}
							name={name}
							number={phone} />
					</ListItem>
				))}
			</ContactsList>}
		</>
	)
}