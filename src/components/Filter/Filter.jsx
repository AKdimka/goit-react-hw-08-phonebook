import PropTypes from "prop-types";
import { Label, Input } from "../Form/Form.styled"

export function Filter({ filterChange, value }) {
	return (
		<Label>
			Find contacts by name
			<Input
				value={value}
				type="text"
				name="filter"
				onChange={filterChange}
			/>
		</Label>
	)
}

Filter.propTypes = {
	filterChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}