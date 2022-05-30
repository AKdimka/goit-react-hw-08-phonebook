import styled from "styled-components";
import CardActions from '@mui/material/CardActions';
import { CardMedia } from "@mui/material";

export const CastomCardActions = styled(CardActions)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10px;
`;
export const CastomCardMedia = styled(CardMedia)`
	background: gray;
`;
export const CallLink = styled.a`
	text-decoration: none;
	color: white;
`;