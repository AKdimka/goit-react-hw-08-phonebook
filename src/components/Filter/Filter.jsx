import { Label, Input } from "../Form/Form.styled"
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, changeFilter } from '../../redux/contacts';

export const Filter = () => {
	const value = useSelector(contactsSelectors.getFilter);
	const dispatch = useDispatch();

	return (
		<Label>
			Find contacts by name
			<Input
				value={value}
				type="text"
				name="filter"
				onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
			/>
		</Label>
	)
}