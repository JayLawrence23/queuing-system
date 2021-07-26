import { Redirect } from 'react-router-dom'
import Layout from '../../Components/Layout';
import { makeStyles, Typography, Button, Avatar, Grid, Paper } from '@material-ui/core'
import ads from '../../Assets/Images/ads.jpeg'
import { grey } from '@material-ui/core/colors'
import ServiceCards from '../../Components/ServiceCards';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    papertitle: {
        padding: theme.spacing(2),
        textAlign: 'center',
        justifyContent: 'center',
        color: grey[900],
        height: 356,
        margin: theme.spacing(2),
        paddingTop: theme.spacing(8),
    },
}));


const Home = ({ authorized }) => {

    const classes = useStyles();

    if (!authorized) {
        return <Redirect to="/queuing-system/login" />
    }

    return (
        <Layout>
            <Grid container style={{ padding: '1rem' }}>
                <Grid item sm={12} md={6}>
                    <Paper elevation={1} className={classes.papertitle}>
                        <Typography variant="h2" component="h2" style={{ fontWeight: '600' }}>
                            BANK REALTIME QUEUING SYSTEM
                        </Typography>
                        <div className={classes.spacing}></div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <img src={ads} alt="Advertisement" height="400px" width='100%' />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <ServiceCards />
                </Grid>
            </Grid>
        </Layout>

    );
}

export default Home;