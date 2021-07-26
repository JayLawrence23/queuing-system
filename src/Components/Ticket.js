import { Paper, Typography, Box, Divider  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import logo from '../Assets/Images/logo-que.png'

const useStyles = makeStyles((theme) => ({

    logo: {
        height: theme.spacing(7),
        margin: '2em auto'
    },
    ticketStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        borderRadius: '16px'
       
    },
    paperStyle: { 
        padding: 30, 
        borderRadius: 16,
        background: theme.palette.primary[400],
        margin: '30px auto',  
        maxWidth: 300,
    },
    bite: {
        content: '',
        width: 40,
        height: 40, 
        background: theme.palette.primary[400],
        borderRadius: '50%',
        position: 'absolute',
    }, 
    icon: {
        padding: 10,
        '&:hover': { 
            color: 'white'
        } 
    }
}));

const Ticket = () => {

    const classes = useStyles();


    return ( 
        <Paper className={classes.paperStyle}>
            <Paper elevation={0} className={classes.ticketStyle}>
                <img src={logo} alt="logo" className={classes.logo} />

                <Typography component="div">
                    <Box fontSize={20}>Ticket Number:</Box>
                    <Box fontWeight="fontWeightBold" fontSize={40}>CS-012</Box>
                    <Box fontSize={18}>Customer Service</Box>
                    <Box fontSize={18}>Jay Lawrence</Box>
                </Typography>
                <Divider style={{ margin: '3rem 0 0 0'}}variant="middle" />
                <div className={classes.bite} style={{ right: -20, bottom: '19%' }}></div>
                <div className={classes.bite} style={{ left: -20, bottom: '19%'}}></div>
                <Typography variant="caption" display="block" style={{ margin: '2rem 0'}} gutterBottom>
                    Your number will be called shortly, <br /> Thank you for waiting.
                </Typography>

            </Paper>
        </Paper>
     );
}
 
export default Ticket;