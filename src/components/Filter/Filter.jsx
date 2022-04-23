import PropTypes from "prop-types";
import { Label, Input } from "../Form/Form.styled"

export const Filter = ({ setFilter, value }) => {
	return (
		<Label>
			Find contacts by name
			<Input
				value={value}
				type="text"
				name="filter"
				onChange={e => setFilter(e.target.value)}
			/>
		</Label>
	)
}

Filter.propTypes = {
	setFilter: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}