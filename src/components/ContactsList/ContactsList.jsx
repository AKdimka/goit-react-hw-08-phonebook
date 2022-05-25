import { List, ListItem } from "./ContactsList.styled";
import { ContactsItem } from "components/ContactsList/ContactsItem";
import { useSelector } from "react-redux";
import { getFilter } from "redux/contactsSlice";
import { useGetContactsListQuery } from "redux/contactsApi";
import { Loader } from "components/Loader/Loader";

export const ContactsList = () => {
	const { data: contacts, isFetching, isSuccess } = useGetContactsListQuery(null, {
		refetchOnFocus: true
	});
	const filterValue = useSelector(getFilter);
	const filtredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filterValue))

	return (
		<>
			{isFetching && <Loader />}
			{isSuccess && !isFetching && <List>
				{filtredContacts.map(({ id, avatar, name, phone }) => (
					<ListItem key={id}>
						<ContactsItem
							id={id}
							img={avatar}
							name={name}
							number={phone} />
					</ListItem>
				))}
			</List>}
		</>
	)
}