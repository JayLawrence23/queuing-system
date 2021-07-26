import { Link } from 'react-router-dom';
import { makeStyles, Typography, Grid, Paper, Divider, ButtonBase } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    services: {
        minHeight: 220,
        backgroundColor: theme.palette.primary[500],
        borderRadius: 16,
        padding: theme.spacing(3),
        textAlign: 'left',
    },
    servicetitle: {
        color: "#FFF",
        
    },
    divider: {
        height: 3,
        background: theme.palette.secondary[500],
        marginTop: theme.spacing(2)
    },
    servicesubtitle: {
        color: '#FFF',
        marginTop: theme.spacing(2),
    },
    subservice: {
        textAlign: 'left',
        minHeight: 220,
        backgroundColor: grey[100],
        borderRadius: 16,
        padding: theme.spacing(3),
    },
    firstdot: {
        color: theme.palette.secondary[500],
        fontSize: 40
    },
    subdot: {
        color: theme.palette.primary[500],
        fontSize: 40
    }
}));

const ServiceCards = () => {

    const classes = useStyles();

    const [state, setState] = useState('Customer Service');

    // const handleOnClick = () => {
    //     props.history.push('/ticket', { service: 7 })
    // }

    return ( 
        <Grid container spacing={2} style={{ padding: '1rem'}}> 
            <Grid item xs={12} sm={6} md={3}>
                <ButtonBase component={Link} to={{ pathname: "/queuing-system/ticketing", state}}>
                {/* <ButtonBase onClick={handleOnClick()}> */}

                    <Paper elevation={0} className={classes.services}>
                        <Typography variant="h4" component="h4" className={classes.servicetitle} gutterBottom>
                            Customer Service<span className={classes.firstdot}>.</span>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1" className={classes.servicesubtitle} gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        </Typography>
                        <Typography style={{ fontStyle: 'italic', color: 'white' }}>Waiting: <Typography display="inline" variant="button" style={{ fontWeight: 'bold', color: 'white' }}>10</Typography></Typography>
                    </Paper>
                </ButtonBase>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <ButtonBase>
                    <Paper elevation={0} className={classes.subservice}>
                        <Typography variant="h4" component="h4" style={{color: grey[900], }} gutterBottom>
                            Bill's Payment<span className={classes.subdot}>.</span>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1" style={{color: grey[900], marginTop: 6}} gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        </Typography>
                        <Typography style={{ fontStyle: 'italic' }}>Waiting: 
                            <Typography display="inline" 
                                variant="button" 
                                color="textPrimary" 
                                style={{ fontWeight: 'bold', }}> 12
                            </Typography>
                        </Typography>
                    </Paper>
                </ButtonBase>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <ButtonBase>
                    <Paper elevation={0} className={classes.subservice}>
                        <Typography variant="h4" component="h4" style={{color: grey[900], }} gutterBottom>
                            Deposit Money<span className={classes.subdot}>.</span>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1" style={{color: grey[900], marginTop: 6}} gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        </Typography>
                        <Typography style={{ fontStyle: 'italic' }}>Waiting: 
                            <Typography display="inline" 
                                variant="button" 
                                color="textPrimary" 
                                style={{ fontWeight: 'bold', }}> 8
                            </Typography>
                        </Typography>
                    </Paper>
                </ButtonBase>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <ButtonBase>
                    <Paper elevation={0} className={classes.subservice}>
                        <Typography variant="h4" component="h4" style={{color: grey[900], }} gutterBottom>
                            Withdraw Money<span className={classes.subdot}>.</span>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1" style={{color: grey[900], marginTop: 6}} gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        </Typography>
                        <Typography style={{ fontStyle: 'italic' }}>Waiting: 
                            <Typography display="inline" 
                                variant="button" 
                                color="textPrimary" 
                                style={{ fontWeight: 'bold', }}> 5
                            </Typography>
                        </Typography>
                    </Paper>
                </ButtonBase>
            </Grid>
        </Grid>
     );
}
 
export default ServiceCards;