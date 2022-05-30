import { NavLink } from "react-router-dom"

export const RespAppbar = () => {
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
		</>
	)
}