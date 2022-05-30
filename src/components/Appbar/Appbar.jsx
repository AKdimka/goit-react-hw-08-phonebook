import * as React from 'react';
import { CustomNavLink } from './Appbar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
	ButtonGroup,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { authOperations } from 'redux/auth';

const RespAppbar = () => {
	const dispatch = useDispatch();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const isLoggedIn = useSelector(authSelectors.getLoggedIn);
	const name = useSelector(authSelectors.getUsername);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<ContactPhoneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					></Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>

							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">
									<CustomNavLink to='/'>Home</CustomNavLink>
								</Typography>
							</MenuItem>

							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">
									<CustomNavLink to='/contacts'>Contacts</CustomNavLink>
								</Typography>
							</MenuItem>
						</Menu>
					</Box>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<ContactPhoneIcon />
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							<CustomNavLink to='/'>Home</CustomNavLink>
						</Button>

						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							<CustomNavLink to='/contacts'>Contacts</CustomNavLink>
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						{isLoggedIn
							?
							<>
								<Tooltip title="Open settings">
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar alt={name} src="/static/images/avatar/2.jpg" />
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: '45px' }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									<MenuItem onClick={() => dispatch(authOperations.logOut())}>
										<Typography textAlign="center">Logout</Typography>
									</MenuItem>
								</Menu>
							</>
							:
							<>
								<ButtonGroup disableElevation variant="contained">
									<Button>
										<CustomNavLink to='/registration'>SignUp</CustomNavLink>
									</Button>
									<Button>
										<CustomNavLink to='/autorization'>LogIn</CustomNavLink>
									</Button>
								</ButtonGroup>
								{/* 	<Typography textAlign="center">
									<NavLink to='/registration'>Registration</NavLink>
								</Typography>

								<Typography textAlign="center">
									<NavLink to='/autorization'>LogIn</NavLink>
								</Typography> */}
							</>}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default RespAppbar;