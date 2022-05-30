import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import { TextField, ButtonGroup, Button } from '@mui/material';
import { Section } from 'components/Section/Section';

export default function RegistrationPage() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const formChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				setName(value)
				break;

			case 'email':
				setEmail(value);
				break;

			case 'password':
				setPassword(value)
				break;

			default:
				return;
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authOperations.register({ name, email, password }));
		resetForm();
	}
	const resetForm = () => {
		setEmail('');
		setPassword('');
		setName('');
	}
	return (
		<Section title='Register'>
			<form
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column' }}>
				<TextField
					required
					onChange={formChange}
					value={name}
					name='name'
					label="Name"
					type="text"
					margin="normal"
				/>
				<TextField
					required
					onChange={formChange}
					value={email}
					name='email'
					label="Email"
					type="email"
					margin="normal"
				/>
				<TextField
					required
					onChange={formChange}
					value={password}
					name='password'
					label="Password"
					type="password"
					margin="normal"
				/>
				<ButtonGroup disableElevation size="medium" variant="contained">
					<Button type="submit">
						Registration
					</Button>
					<Button color="error" type="reset">
						Reset Form
					</Button>
				</ButtonGroup>
			</form>
		</Section>
	)
}