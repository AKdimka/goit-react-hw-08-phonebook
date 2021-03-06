import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoutes({
	children,
	redirectTo = '/',
	...routeProps
}) {
	const isLoggedIn = useSelector(authSelectors.getLoggedIn);

	return (
		<Route {...routeProps}>
			{isLoggedIn ? children : <Redirect to={redirectTo} />}
		</Route>
	);
}