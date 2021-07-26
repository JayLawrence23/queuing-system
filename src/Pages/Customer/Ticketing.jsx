import { useState } from 'react'
import { Grid, Paper, Container, Button, Typography, Box, Divider, IconButton } from '@material-ui/core'
import Layout from '../../Components/Layout';
import { makeStyles } from '@material-ui/core'
import logo from '../../Assets/Images/logo-que.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Controls from '../../Components/Controls';
import Ticket from '../../Components/Ticket';

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
    logo: {
        height: theme.spacing(7),
        margin: '2em auto'
    },
    backbutton: {
        border: '1px ' + theme.palette.primary[500] + ' solid',
        marginRight: 20,
        padding: 0,
        '&:hover': {
            background: theme.palette.primary[500],
        }
    },
    icon: {
        padding: 10,
        '&:hover': {
            color: 'white'
        }
    }
}));


const Ticketing = (props) => {

    const classes = useStyles();
    let history = useHistory();

    // const location = useLocation();
    // const { selectedService } = location.state;

    // const { service } = (props.location && props.location.state) || {}
    return (
        <Layout>
            <Container className={classes.root}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <IconButton className={classes.backbutton} component={Link} to={{ pathname: "/Home" }}>
                        <ArrowBackRoundedIcon fontSize="medium" color="primary" className={classes.icon} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        component="h4"
                        style={{ marginTop: 5 }}
                        gutterBottom
                    >
                        Customer Service
                    </Typography>
                </div>

                <Ticket />

                <div style={{ margin: '10px auto', display: 'flex', justifyContent: 'center' }}>
                    <Controls.Button
                        text="Get the Ticket"
                        onClick={() => {
                            history.push('/queuing-system/virtualmonitoring')
                        }}
                    />
                </div>
            </Container>
        </Layout>
    );
}

export default Ticketing;
