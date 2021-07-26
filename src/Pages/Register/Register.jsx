import { Grid, Paper, TextField, Button, Typography, Radio, Checkbox, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@material-ui/core'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import { useForm, Form } from '../../Components/useForm';
import Controls from '../../Components/Controls';
import id from 'date-fns/esm/locale/id/index.js';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    btn: {
        borderRadius: 50,
        margin: '15px 0',
    },
    title: {
        marginBottom: 20,
        fontWeight: '600'
    },
    paperStyle: {
        padding: 30,
        paddingBottom: 80,
        borderRadius: 16,
        width: 300,
        margin: '30px auto',
    }
}));

const bankholderItems = [
    { id: 'No', title: 'No' },
    { id: 'Yes', title: 'Yes' },

]

const initialFValues = {
    id: 0,
    fname: '',
    lname: '',
    mobile: '',
    bankholder: '',
    accno: '',
    email: '',
    password: '',
    date_created: new Date(),
}


const Register = () => {

    let history = useHistory();
    const classes = useStyles();
    const [bankHolder, setBankHolder] = useState('No');
    const [agree, setAgree] = useState(false);

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(initialFValues);

    const validate = () => {
        let temp = {}
        temp.fname = values.fname ? "" : "This field is required."
        temp.lname = values.lname ? "" : "This field is required."
        temp.mobile = !(values.mobile) ? "This field is required." : ((!(values.mobile.length === 11)) ? "11 digits required." : "")
        temp.email = (!(/$^|.+@.+..+/).test(values.email)) ? "Email is not valid." : (!(values.email) ? "This field is required." : "")
        temp.password = values.password ? "" : "This field is required."
        temp.accno = bankHolder === "Yes" && values.accno ? "" : (bankHolder === "No" && !(values.accno) ? "" : "This field is required.")
        setErrors({
            ...temp
        })

        console.log(errors.accno)
        return console.log(Object.values(temp).every(x => x == ""));
    }



    const handleSubmit = (e) => {
        e.preventDefault(); //To not refresh the form after clickng submit
        validate();

    }

    return (
        <Grid className={classes.root}>
            <Paper elevation={2} className={classes.paperStyle}>
                <Typography
                    className={classes.title}
                    variant="h5"
                    color="textPrimary"
                    component="h4"
                    gutterBottom
                >
                    Sign Up
                </Typography>


                <Form onSubmit={handleSubmit}>

                    <Controls.Input
                        name="fname"
                        value={values.fname}
                        label="First Name"
                        onChange={handleInputChange}
                        error={errors.fname}
                        fullWidth
                    />

                    <Controls.Input
                        onChange={handleInputChange}
                        label="Last Name"
                        name="lname"
                        value={values.lname}
                        error={errors.lname}
                        fullWidth
                    />

                    <Controls.Input
                        label="Mobile Number"
                        onChange={handleInputChange}
                        name="mobile"
                        value={values.mobile}
                        error={errors.mobile}
                        fullWidth
                    />

                    <Controls.RadioGroup
                        name="bankholder"
                        value={bankHolder}
                        onChange={(e) => setBankHolder(e.target.value)}
                        label="Bank Holder"
                        items={bankholderItems}
                    />

                    {bankHolder == "Yes" ? <Controls.Input
                        onChange={handleInputChange}
                        label="Account Number"
                        name="accno"
                        value={values.accno}
                        error={errors.accno}
                        fullWidth
                    /> : null}

                    <Controls.Input
                        onChange={handleInputChange}
                        label="Email"
                        name="email"
                        value={values.email}
                        error={errors.email}
                        fullWidth
                    />

                    <Controls.Input
                        onChange={handleInputChange}
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        error={errors.password}
                        fullWidth
                    />

                    <Controls.Checkbox
                        name="checkedB"
                        label="I have read and agree the Privacy Policy"
                        onChange={() => setAgree(!agree)}
                    />

                    <Controls.Button
                        text="Register"
                        fullWidth
                        type="submit"
                        className={classes.btn}
                        disabled={!agree}
                    />

                </Form>
                <Button onClick={() => {
                    history.push("/queuing-system/")
                }}>
                    Already have an account?
                </Button>
            </Paper>
        </Grid>
    );
}

export default Register;