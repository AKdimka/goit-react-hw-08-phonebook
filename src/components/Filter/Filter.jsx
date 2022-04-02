import { Component } from "react";

export class Filter extends Component {
	state = {
		filter: '',
	}

	filterChange = (e) => {
		const { name, value } = e.currentTarget;

		this.setState({
			[name]: value,
		})

		setTimeout(() => console.log({ value }), 1)

		this.props.filter(this.state.filter)
	}
	render() {
		return (
			<label style={{
				display: 'flex',
				flexDirection: 'column'
			}}>
				Find contacts by name
				<input
					value={this.state.filter}
					type="text"
					name="filter"
					onChange={this.filterChange}
				/>
			</label>
		)
	}
}