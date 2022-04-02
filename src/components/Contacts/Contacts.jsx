import { Component } from "react";

export class Contacts extends Component {
	render() {
		return (
			<ul
				className="contacts-list"
				style={{
					padding: "0px"
				}}>
				{this.props.contacts.map(({ name, id, number }) =>
					<li
						className="contacts-item"
						key={id}
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between"
						}}>
						<span>{name}:</span> <span>{number}</span>
					</li>)}
			</ul>
		)
	}
}