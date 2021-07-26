import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const Table = () => {
    const data =[
        {date:'02/22/21', queueticket: 'CS-012', service: 'Customer Service', issuedtime: '11:12 AM', calledtime: '11:40 AM', status: 'Served'},
        {date:'03/16/21', queueticket: 'BP-021', service: 'Bills Payment', issuedtime: '10:12 AM', calledtime: '10:40 AM', status: 'Cancelled'},
        {date:'04/21/21', queueticket: 'DP-004', service: 'Deposit Money', issuedtime: '09:22 AM', calledtime: '09:40 AM', status: 'Cancelled'},
        {date:'05/12/21', queueticket: 'CS-062', service: 'Customer Service', issuedtime: '11:12 AM', calledtime: '12:40 PM', status: 'Served'},
        {date:'05/12/21', queueticket: 'CS-062', service: 'Customer Service', issuedtime: '11:12 AM', calledtime: '12:40 PM', status: 'Served'},
        {date:'05/12/21', queueticket: 'CS-062', service: 'Customer Service', issuedtime: '11:12 AM', calledtime: '12:40 PM', status: 'Served'},
    ]

    const columns=[
        {
            title: 'Date', field: 'date'
        },
        {
            title: 'Queue Ticket', field: 'queueticket'
        },
        {
            title: 'Service', field: 'service'
        },
        {
            title: 'Issued Time', field: 'issuedtime'
        },
        {
            title: 'Called Time', field: 'calledtime'
        },
        {
            title: 'Status', field: 'status'
        },
        
    ]
    return ( 
        <div>
            <MaterialTable title="Transactions" 
            data={data}
            columns={columns}
            options={{
                search: false,
                exportButton: true,
            }}
            icons={tableIcons}
            />
        </div>
     );
}


export default Table;