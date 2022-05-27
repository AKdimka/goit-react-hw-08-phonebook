import { MainContainer } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import Contacts from "pages/ContactsPage";
import RegistrationPage from "pages/RegistrationPage";
import AutorizationPage from "pages/AutorizationPage";
import Layout from "./Layout/Layout";

export function App() {
	return (
		//<MainContainer>
		<Routes >
			<Route path="/" element={<Layout />}>

				<Route path="contacts" element={<Contacts />} />
				<Route path="registration" element={<RegistrationPage />} />
				<Route path="autorization" element={<AutorizationPage />} />

				{/* NOT FOUND PAGE*/}
			</Route>
		</Routes >
		//	</MainContainer>
	);
}
