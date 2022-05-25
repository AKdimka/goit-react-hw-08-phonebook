import { MainContainer } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import Contacts from "pages/Contacts";
import Registration from "pages/Registration";
import Autorization from "pages/Autorization";
import Layout from "./Layout/Layout";

export function App() {
	return (
		<MainContainer>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="contacts" element={<Contacts />} />
					<Route path="registration" element={<Registration />} />
					<Route path="autorization" element={<Autorization />} />

					{/* NOT FOUND PAGE*/}
				</Route>
			</Routes>
		</MainContainer>
	);
}
