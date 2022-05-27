import { NavLink, Outlet } from "react-router-dom"
import { Header, Navigation } from "./Layout.styled"


export default function Layout() {
	return (
		<>
			<Header>
				<Navigation>
					<NavLink to='/contacts'>Contacts</NavLink>
				</Navigation>

				<div>{/* AuthNav */}
					<NavLink to='/registration'>Registration</NavLink>
					<NavLink to='/autorization'>LogIn</NavLink>
				</div>
				{/* UserMenu */}
			</Header>
			<main>
				<Outlet />
			</main>

			<footer>
				2022
			</footer>
		</>
	)
}