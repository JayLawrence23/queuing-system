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

                <Grid item md={8} xs={12}>
                    <Grid container>
                        <Grid item xs={5} style={{ borderRight: '1px gray solid', textAlign: 'center' }}>
                            <Typography
                                variant="h4"
                                color="secondary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                WAITING
                            </Typography>

                            {/* { For the mean time } */}
                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                CS-012
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                WM-052
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                BP-002
                            </Typography>

                        </Grid>

                        <Grid item xs={7} style={{ textAlign: 'center' }}>
                            <Typography
                                variant="h4"
                                color="secondary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                SERVING
                            </Typography>

                            {/* { For the mean time } */}
                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                CS-012
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                WM-052
                            </Typography>

                            <Typography
                                variant="h5"
                                color="textPrimary"
                                component="h4"
                                style={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                BP-002
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Layout>
    );
}

export default VirtualMonitoring;