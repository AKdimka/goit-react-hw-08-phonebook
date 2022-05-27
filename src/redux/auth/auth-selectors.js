const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshing = state => state.auth.isRefreshing;

const getUserEmail = state => state.auth.user.email;

const authSelectors = {
	getIsLoggedIn,
	getUsername,
	getIsRefreshing,
	getUserEmail,
};
export default authSelectors;


