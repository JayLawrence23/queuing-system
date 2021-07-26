import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import Controls from '../../Components/Controls'
import { useForm, Form } from '../../Components/useForm';

const useStyles = makeStyles({
    btn: {
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        marginBottom: 20,
    },
    paperStyle: {
        padding: 30,
        paddingBottom: 80,
        width: 300,
        borderRadius: 16,
        margin: '30px auto',
    },
    field: {
        marginTop: 10,
        marginBottom: 10,
        ['& fieldset']: {
            borderRadius: 16,
        }
    },
})

const Login = () => {

    let history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validate = () => {
        let temp = {}
        // temp.email = (/$|.+@.+..+/).test(values.email) ? "" : "Must be a valid email."
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (email == '') {
            setEmailError(true);
        }
        if (password == '') {
            setPasswordError(true);
        }
        if (email && password) {
            history.push('/Home')
        }
        // <Redirect to="/home"/>
    }

    return (
        <Grid>
            <Paper elevation={2} className={classes.paperStyle}>
                <Typography
                    className={classes.title}
                    variant="h5"
                    color="textPrimary"
                    component="h4"
                    gutterBottom
                >
                    Login
                </Typography>

                <Form onSubmit={handleSubmit}>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.field}
                        variant="outlined"
                        color="primary"
                        label="Email"
                        name="email"
                        error={emailError}
                        fullWidth
                        required

                    />

                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        className={classes.field}
                        variant="outlined"
                        color="primary"
                        label="Password"
                        type="password"
                        name="password"
                        error={passwordError}
                        fullWidth
                        required

                    />

                    <Controls.Button
                        text="Login"
                        fullWidth
                        type="submit"
                        onClick={handleSubmit}
                        className={classes.btn}
                    />

                </Form>

                <Controls.Button
                    onClick={() => { history.push("/queuing-system/Register") }}
                    className={classes.btn}
                    variant="outlined"
                    fullWidth
                    text="Sign Up"

                />
            </Paper>
        </Grid>
    );
}

export default Login;