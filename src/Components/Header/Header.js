import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import useDataProvider from '../../Hooks/useDataProvider';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Header = () => {
  const {user, logOut} = useDataProvider()

  const {setSearch} = useData()
  const searchForTheMeal = event => {
    const getText = event.target.value
    setSearch(getText)
  }

    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <div className="container">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
              >
                <Link style={{textDecoration: "none", color: "white", fontSize: "16px", marginRight: "40px"}} to="/home">Home</Link>
                <Link style={{textDecoration: "none", color: "white", fontSize: "16px", marginRight: "40px"}} to="/about">About</Link>
                <Link style={{textDecoration: "none", color: "white", fontSize: "16px", marginRight: "40px"}} to="/contact">Contact</Link>
                {/* <Link style={{textDecoration: "none", color: "white", fontSize: "16px", marginRight: "40px"}} to="/login">Login</Link> */}
                {
                  user?.email ? <button onClick={logOut}  className="btn btn-light"><Link style={{textDecoration: "none"}} to="/login">Log Out</Link></button>
                  :
                  <button className="btn btn-light"><Link style={{textDecoration: "none"}} to="/login">Log In</Link></button>
                }
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Meal"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{width: "400px"}}
                  onChange={searchForTheMeal}
                />
              </Search>
            </Toolbar>
            </div>
          </AppBar>
        </Box>
      </div>

    

    );
};

export default Header;