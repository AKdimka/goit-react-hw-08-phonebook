import { Label, Input } from "../Form/Form.styled"
import { /* useSelector, */ useDispatch } from "react-redux";

import { changeFilter/* , getFilter */ } from "redux/contactsSlice";

export const Filter = () => {
	//const value = useSelector(getFilter);
	const dispatch = useDispatch();

	return (
		<Label>
			Find contacts by name
			<Input
				/* value={value} */
				type="text"
				name="filter"
				onChange={(e) => dispatch(changeFilter(e.target.value.toLowerCase()))}
			/>
		</Label>
	)
}