import { useState } from 'react'
import { Grid, Paper, Container, Button, Typography, Box, Divider, IconButton } from '@material-ui/core'
import Layout from '../../Components/Layout';
import { makeStyles } from '@material-ui/core'
import logo from '../../Assets/Images/logo-que.png'
import { Link, useLocation } from 'react-router-dom';
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
    },
    callingtitle: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '5vw',
        },
    },
    callingcontent: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4vw',
        },
    },
    countercontainer: {
        padding: '1rem',
        textAlign: 'center',
        borderRadius: 16,
        background: theme.palette.primary[50],
        [theme.breakpoints.down('xs')]: {
            padding: '.5rem',
        },
    },
    waitingcontainer: {
        paddingBlock: '1rem',
        textAlign: 'center',
        borderRadius: 16,
        background: '#F7F7F7',
        margin: 5
    }
}));


const VirtualMonitoring = () => {

    const classes = useStyles();

    return (
        <Layout>
            <Grid container className={classes.root}>
                <Grid item md={4} xs={12}>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        component="h4"
                        style={{ fontWeight: 'bold' }}
                        gutterBottom
                    >
                        Your Current Ticket
                    </Typography>

                    <Ticket />
                </Grid>

                <Grid item md={8} xs={12} style={{ padding: '1rem' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                color="secondary"
                                component="h4"
                                className={classes.callingtitle}
                                gutterBottom
                                noWrap
                            >
                                SERVING
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Grid container className={classes.countercontainer}>
                                <Grid item xs={4} style={{ borderRight: '1px orange solid' }}>
                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        #1
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        #2
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        #3
                                    </Typography>
                                </Grid>

                                <Grid item xs={8}>
                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        CS-005
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        WM-047
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        WM-046
                                    </Typography>

                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Grid container className={classes.countercontainer}>
                                <Grid item xs={4} style={{ borderRight: '1px orange solid' }}>
                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        #4
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        #5
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        #6
                                    </Typography>
                                </Grid>

                                <Grid item xs={8}>
                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        CS-007
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        WM-044
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="textPrimary"
                                        component="h4"
                                        className={classes.callingcontent}
                                        gutterBottom
                                    >
                                        CS-008
                                    </Typography>

                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                color="secondary"
                                component="h4"
                                className={classes.callingtitle}
                                gutterBottom
                                noWrap
                            >
                                WAITING
                            </Typography>
                        </Grid>

                        <Grid item xs={5} sm={3} className={classes.waitingcontainer}>

                            {/* { For the mean time } */}
                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                CS-012
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                WM-052
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                BP-002
                            </Typography>

                        </Grid>

                        <Grid item xs={5} sm={3} className={classes.waitingcontainer}>

                            {/* { For the mean time } */}
                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                CS-011
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                WM-051
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                BP-001
                            </Typography>

                        </Grid>

                        <Grid item xs={5} sm={3} className={classes.waitingcontainer}>

                            {/* { For the mean time } */}
                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                CS-010
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                WM-050
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                className={classes.callingcontent}
                                gutterBottom
                            >
                                CS-009
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </Layout>
    );
}

export default VirtualMonitoring;