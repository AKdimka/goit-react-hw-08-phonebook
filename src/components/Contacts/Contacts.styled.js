import styled from "styled-components";

export const ContactsList = styled.ul`
	padding: 0px;
`;

export const ListItem = styled.li`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 5px;
	`;

export const DeleteBTN = styled.button`
	position: absolute;
	left: -10%;
	cursor: pointer;
	border: solid 1px black;
	border-radius: 3px;
	background: red;
`