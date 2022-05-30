import { useState } from "react";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import authOperations from '../redux/auth/auth-operations';
import { TextField, ButtonGroup, Button } from '@mui/material';

export default function RegistrationPage() {
	const dispatch = useDispatch();
	//const navigate = useNavigate();
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
		//navigate('/contacts');
		resetForm();
	}
	const resetForm = () => {
		setEmail('');
		setPassword('');
		setName('');
	}
	return (
		<>
			<h2>Register</h2>
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
		</>
	)
}