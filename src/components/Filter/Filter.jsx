import { Label, Input } from "../Form/Form.styled"
import { useSelector, useDispatch } from "react-redux";

import { filtredContacts } from "redux/store";

export const Filter = () => {
	const value = useSelector(state => state.contacts.filter)
	const dispatch = useDispatch();

	return (
		<Label>
			Find contacts by name
			<Input
				value={value}
				type="text"
				name="filter"
				onChange={(e) => dispatch(filtredContacts(e.target.value))}
			/>
		</Label>
	)
}