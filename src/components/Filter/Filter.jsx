import { Label, Input } from "../Form/Form.styled"
import { useDispatch } from "react-redux";

import { changeFilter } from "redux/store";

export const Filter = () => {
	const dispatch = useDispatch();

	return (
		<Label>
			Find contacts by name
			<Input
				type="text"
				name="filter"
				onChange={(e) => dispatch(changeFilter(e.target.value))}
			/>
		</Label>
	)
}