import { makeStyles, Drawer, Typography, ListItem, List, ListItemIcon, ListItemText, Button, IconButton, Badge, Toolbar, AppBar, Avatar } from '@material-ui/core'
import { ReceiptOutlined, DesktopWindowsOutlined, AppsOutlined, AccountCircleOutlined, Notifications } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router';
import { grey, pink } from '@material-ui/core/colors'
import { format } from 'date-fns'
import logo from '../Assets/Images/logo-que.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%'
        },
        drawer: {
            width: drawerWidth,
            [theme.breakpoints.down('sm')]: {
                width: 60,
            },
        },
        drawerPaper: {
            width: drawerWidth,
            [theme.breakpoints.down('sm')]: {
                width: 60,
            },
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4',
            fontWeight: 'bold',
        },
        title: {
            // padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            [theme.breakpoints.down('sm')]: {
                width: `calc(100% - 60px)`,
            },
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
        },
        avatar: {
            height: theme.spacing(7),
            width: theme.spacing(7),
            marginRight: theme.spacing(2)
        },
        listtext: {
            color: grey[600],
            fontWeight: 'fontWeightMedium',
        },
        headerdrawer: {
            display: 'flex',
            paddingBlock: theme.spacing(2),
            alignItems: 'center',
        },
        listitem: {
            borderRadius: theme.spacing(6),
            background: pink,
        }
    }
})

const Layout = ({ children }) => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: "Home",
            icon: <AppsOutlined color="secondary" />,
            path: '/queuing-system/Home'
        },
        {
            text: "Virtual Monitoring",
            icon: <DesktopWindowsOutlined color="secondary" />,
            path: '/queuing-system/Virtualmonitoring'
            
        },
        {
            text: "Account",
            icon: <AccountCircleOutlined color="secondary" />,
            path: '/queuing-system/'
        },
        {
            text: "Transactions",
            icon: <ReceiptOutlined color="secondary" />,
            path: '/queuing-system/'
        }
    ]

    return ( 
        <div className={classes.root}>
            {/* { app bar } */}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y')}
                    </Typography>

                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={10} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <Button color="inherit" onClick={() => { history.push('/queuing-system/')}}>Logout</Button>
                    
                </Toolbar>
            </AppBar>

            {/* { side drawer } */}
            <Drawer
                className={ classes.drawer }
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={ classes.headerdrawer}>
                    <Avatar src={logo} className={classes.avatar}/>
                    <Typography variant="h5" className={ classes.title }>
                        QueSoft
                    </Typography>
                    
                </div>

                {/* { List Links} */}

                <List>
                    { menuItems.map(item => (
                        <ListItem 
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null} //If the route is on the location, active class will execute
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} className={ classes.listtext}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            
            <div className={ classes.page }>
                <div className={classes.toolbar}></div>
                { children }
            </div>
        </div>
     );
}
 
export default Layout;