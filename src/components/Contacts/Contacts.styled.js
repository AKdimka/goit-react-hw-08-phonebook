import styled from "styled-components";

export const ContactsList = styled.ul`
	padding: 0px;
`;

export const ListItem = styled.li`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10px;
	`;

export const DeleteBTN = styled.button`
	position: absolute;
	left: -10%;
	top: 2px;
	cursor: pointer;
	border: 0;
  border-radius: 3px;
  transition: all 250ms;
  user-select: none;
	:hover{
		transform: scale(1.2);
		background-color: red;
	}
`;