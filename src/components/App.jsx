//import { MainContainer } from "./App.styled";
import { useEffect, lazy } from 'react';
import { Switch } from "react-router-dom";
import Contacts from "pages/ContactsPage";
import RegistrationPage from "pages/RegistrationPage";
import AutorizationPage from "pages/AutorizationPage";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from "./Routes/PrivateRoutes";
import HomePage from '../pages/HomePage'
import RespAppbar from './Appbar/Appbar';

export function App() {
	const dispatch = useDispatch();
	const isFetchingCurrentUser = useSelector(authSelectors.fetchCurrent);

	useEffect(() => {
		dispatch(authOperations.fetchCurrentUser());
	}, [dispatch]);
	return (
		//<MainContainer>
		<>
			<RespAppbar />
			<Switch >

				<PublicRoutes path="/" exact redirectTo="/contacts" restricted>
					<HomePage />
				</PublicRoutes>

				<PublicRoutes path="/register" redirectTo="/contacts" restricted>
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
		</>
		//	</MainContainer>
	);
}