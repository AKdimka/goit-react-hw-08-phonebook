import { Component } from "react";
import PropTypes from "prop-types";
import { Label, Input } from "../Form/Form.styled"

export class Filter extends Component {
	render() {
		return (
			<Label>
				Find contacts by name
				<Input
					value={this.props.value}
					type="text"
					name="filter"
					onChange={this.props.filterChange}
				/>
			</Label>
		)
	}
}

Filter.propTypes = {
	filterChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}