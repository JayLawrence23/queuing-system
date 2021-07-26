import { makeStyles, FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

    field: {
        marginTop: 10,
        marginBottom: 10,
        ['& fieldset']:{
            borderRadius: 16,
        }
    },
}));

export default function RadioGroup(props) {
    
    const classes = useStyles();

    const { name, label, value, onChange, items } = props;
    return (
        <FormControl className={classes.field}>
            <FormLabel>{ label }</FormLabel>
            <MuiRadioGroup value={value} onChange={onChange} name={name}>
            {
                items.map(
                    (item, index)=>(
                        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                    )
                )
            }
            </MuiRadioGroup>
        </FormControl>
    )
}
