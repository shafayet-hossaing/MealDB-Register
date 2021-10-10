import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';

const Login = () => {
    const {googleAuth} = useData()
    const formControl = e => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="container" style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <Box
                className="bg-light p-5 rounded shadow"
                sx={{width: "600px"}}
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={formControl}
                >
                <Typography variant='h4'sx={{textAlign: "center", marginBottom: '20px', fontWeight: "bold"}} color='primary'>
                    Please Log-In
                </Typography>
                <div>
					<TextField
						id='filled-error'
						label='Email'
                        style={{marginBottom: "25px"}}
                        fullWidth={true}
                        // onBlur={inputEmailValue}
					/>
				</div>
                <div>
                    <TextField
                        style={{marginBottom: "25px"}}
                        id="filled-error-helper-text"
                        label="Password"
                        fullWidth={true}
                        // onBlur={inputPasswordValue}
                    />
                </div>
                <div>
                <Button type="submit" className="me-3" variant="contained">Login</Button>
                <Button onClick={googleAuth} type="submit" variant="contained">Login With Google</Button>
                <Link style={{marginLeft: "30px", textDecoration: "none"}} to="/registration">Don't Have An Account?</Link>
                </div>
            </Box>
        </div>
        </div>
    );
};

export default Login;