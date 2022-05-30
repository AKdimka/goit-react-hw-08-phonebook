import { MainContainer } from "./App.styled";
import { useEffect } from 'react';
import { Switch } from "react-router-dom";
import Contacts from "pages/ContactsPage";
import RegistrationPage from "pages/RegistrationPage";
import AutorizationPage from "pages/AutorizationPage";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from "./Routes/PrivateRoutes";
import HomePage from '../pages/HomePage'
import RespAppbar from './Appbar/Appbar';

export function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser());
	}, [dispatch]);

	return (
		<>
			<RespAppbar />
			<MainContainer>
				<Switch >
					<PublicRoutes path="/" exact redirectTo="/contacts" restricted>
						<HomePage />
					</PublicRoutes>

					<PublicRoutes path="/registration" redirectTo="/contacts" restricted>
						<RegistrationPage />
					</PublicRoutes>

					<PublicRoutes path="/autorization" redirectTo="/contacts" restricted>
						<AutorizationPage />
					</PublicRoutes>

					<PrivateRoutes path="/contacts" redirectTo="/login">
						<Contacts />
					</PrivateRoutes>

					{/* NOT FOUND PAGE*/}
				</Switch >
			</MainContainer>
		</>
	);
}