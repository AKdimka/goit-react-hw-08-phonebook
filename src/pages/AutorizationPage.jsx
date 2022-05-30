import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import authOperations from '../redux/auth/auth-operations';
import { TextField, Button } from '@mui/material';

export default function AutorizationPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const formChange = ({ target: { name, value } }) => {

		switch (name) {
			case 'email':
				setEmail(value)
				break;

			case 'password':
				setPassword(value)
				break;

			default:
				return;
		}

	}
	const submitForm = (e) => {
		e.preventDefault()
		dispatch(authOperations.logIn({ email, password }));
		navigate('/contacts');
		resetorm();
	}
	const resetorm = () => {
		setEmail('');
		setPassword('');
	}
	return (
		<>
			<h2>LogIn</h2>
			<form onSubmit={submitForm}
				style={{ display: 'flex', flexDirection: 'column' }}>

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
				<Button variant="contained" size="medium" type='submit'>
					LogIn
				</Button>
			</form>
		</>
	)
}