import { FormControl, FormControlLabel, MenuItem, Checkbox as MuiCheckbox} from '@material-ui/core'

export default function Checkbox(props) {

    const {name, label, value, onChange } = props;
    return (
        <FormControl>
            <FormControlLabel
                control={
                <MuiCheckbox
                    checked={value}
                    onChange={onChange}
                    name={name}
                    color="secondary"
                />
                }
                label={label}
            />
        </FormControl>
    )
}
