import styled from "styled-components";

export const ListItem = styled.li`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10px;
	`;

export const ContactImg = styled.img`
	height: 80px;
	width: 80px;
	background: gray;
`;

export const ContactContent = styled.div`
display:flex;
flex-direction: column;
width: 207px;
padding: 10px 0 10px 5px;
`

export const DeleteBTN = styled.button`
	display: flex;
	align-items: center;
	width: 40px;
	color: white;
	background-color: rgb(255,0,0);
	border: none;

	:hover{
		transform: scale(1.2);
		background-color: rgb(200,0,0);
	}
`;

/* export const CallBtn = styled.a`
	display: flex;
	align-items: center;
	width: 40px;
	color: white;
	background-color: green;
` */