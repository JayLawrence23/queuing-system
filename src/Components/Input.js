import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'

 

const useStyles = makeStyles((theme) => ({

    field: {
        marginTop: 10,
        marginBottom: 10,
        ['& fieldset']:{
            borderRadius: 16,
        }
    },
}));
    
export default function Input(props) {

   
    const classes = useStyles();
    const {name, label, value, onChange, error=null, ...other} = props;

    return (
        <TextField
            // onChange={(e) => setEmail(e.target.value)}
            onChange={onChange}
            className={classes.field}
            label={label}
            variant="outlined"
            color="primary"
            name={name}
            value={value}
            helperText={error}
            error={error === null ? false : (error !== "" && true)}
            {...other}
            required
            
        />
    )
}
