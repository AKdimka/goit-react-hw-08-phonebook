import { CastomCardActions, CastomCardMedia, CallLink } from "./ContactsItem.styled";
import { PropTypes } from "prop-types";
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { Card, CardContent, Button, Typography } from '@mui/material';

export const ContactsItem = ({ id, img, name, number }) => {
	const dispatch = useDispatch();
	const onDelete = id => dispatch(contactsOperations.deleteContact(id));

	const normStr = number?.split('-').join("");

	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CastomCardMedia
					component="img"
					alt={`${name} photo`}
					height="140"
					image={img}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{number}
					</Typography>
				</CardContent>
				<CastomCardActions>
					<Button onClick={() => onDelete(id)} variant="outlined" color="error">
						Delete
					</Button>

					<Button variant="contained" color="success">
						<CallLink href={`tel:${normStr}`}>CAll</CallLink>
					</Button>
				</CastomCardActions>
			</Card>
		</>
	)
}

ContactsItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};