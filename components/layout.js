
import React , { useEffect , useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import Link from 'next/link'
import styles from './styles.module.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'
import DateFnsUtils from '@date-io/date-fns'
import shortid from 'shortid'
import { notification, Space } from 'antd'
import { 
    Row ,
    Col 
    }  from 'antd'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import AddIcon from '@material-ui/icons/Add'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers'
import AddTask from '../actions/addTaskAction'
import { Input } from 'antd'





const { TextArea } = Input;
  


function Layout({ 
    children ,
    todayBC ,
    todayDarkBC ,
    todayBorderLeft ,
    todayFontWeight , 
    todayIconColor ,
    importantBC ,
    importantDarkBC ,
    importantBorderLeft ,
    importantFontWeight ,
    importantIconColor ,
    completedBC ,
    completedDarkBC ,
    completedBorderLeft ,
    completedFontWeight ,
    completedIconColor ,
    notCompletedBC ,
    notCompletedDarkBC ,
    notCompletedBorderLeft ,
    notCompletedFontWeight ,
    notCompletedIconColor 
    })  {

    const [currentTheme , setCurrentTheme ] = useState('light');
    const [addTask , setAddTask] = useState(false);

    const [todoData , setTodoData] = useState({
        title: '' ,
        description: '' ,
        tag: '' , 
        time: new Date()
    })

    console.log(todoData.time)
    const [theme , setTheme ] = useState(
        {
            textColor: 'black' ,
            backgroundColor: '#fff',
            TodayBC: todayBC ,
            ImportantBC: importantBC ,
            CompletedBC: completedBC ,
            NotCompletedBC: notCompletedBC ,
            inputsBackground: '#f5f6f7' ,
            toggleChecked: false
        }
    );

    

    
    const [date , setDate] = useState({
        second: '',
        minute: '',
        hour: '',
        day: '',
        weekday: '',
        month: '',
        monthName: '',
        year: ''
    }); 
    const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(
        () => {
            //style
            setCurrentTheme(localStorage.getItem('Theme') || 'light')
            handleLoadTheme()
            //end of style

            const newDate = new Date();
            setDate({
        second: newDate.getSeconds(),
        minute: newDate.getMinutes(),
        hour: newDate.getHours(),
        day: newDate.getDate(),
        weekday: weekday[newDate.getDay()],
        month: newDate.getMonth(),
        monthName: month[newDate.getMonth()],
        year: newDate.getFullYear()
            }) 
        }

    ,[])

    const handleLoadTheme = () => {
        const current = localStorage.getItem('Theme')
        if(current === 'dark') {
            setTheme(
                {
                    textColor: '#fff' ,
                    backgroundColor: '#0d1117',
                    TodayBC: todayDarkBC ,
                    ImportantBC: importantDarkBC ,
                    ComplatedBC: completedDarkBC ,
                    NotComplatedBC: notCompletedDarkBC ,
                    inputsBackground: '#30363d' ,
                    toggleChecked: true
                }
            )
        } else if(current === 'light') {
            setTheme(
                {
                    textColor: 'black' ,
                    backgroundColor: '#fff',
                    TodayBC: todayBC ,
                    ImportantBC: importantBC ,
                    CompletedBC: completedBC ,
                    NotCompletedBC: notCompletedBC ,
                    inputsBackground: '#f5f6f7' ,
                }
            )
        }
    }

    const handleTheme = () => {
        if(currentTheme === 'light') {
            setTheme(
                {
                    textColor: '#fff' ,
                    backgroundColor: '#0d1117' ,
                    TodayBC: todayDarkBC ,
                    ImportantBC: importantDarkBC ,
                    CompletedBC: completedDarkBC ,
                    NotCompletedBC: notCompletedDarkBC ,
                    inputsBackground: '#30363d' ,
                    toggleChecked: true
                }
            )
            localStorage.setItem('Theme' , 'dark')
            setCurrentTheme(localStorage.getItem('Theme'))
        } else if(currentTheme === 'dark') {
            setTheme(
                {
                    textColor: 'black' ,
                    backgroundColor: '#fff' ,
                    TodayBC: todayBC ,
                    ImportantBC: importantBC ,
                    CompletedBC: completedBC ,
                    NotCompletedBC: notCompletedBC ,
                    inputsBackground: '#f5f6f7' ,
                    toggleChecked: false
                }
            )
            localStorage.setItem('Theme' , 'light')
            setCurrentTheme(localStorage.getItem('Theme'))
        }
    };

    const handleAddTask = () => {
        setAddTask(true)
    }
    const handleSubmitTask = () => {
        if(todoData.title === '' || todoData.description === '' || todoData.tag === '') {
            openNotification('bottomRight')
        } else if(todoData.time === new Date()) {
            dispatch(AddTask({
                title: todoData.title ,
                description: todoData.description ,
                time: new Date() ,
                tag: todoData.tag ,
                completed: false ,
                scored: false , 
                id: shortid.generate()
            }))
            setTodoData({
                title: '' ,
                description: '' ,
                tag: '' ,
                time: new Date()
            })
            setAddTask(false)
        } else {
            dispatch(AddTask({
                title: todoData.title ,
                description: todoData.description ,
                time: todoData.time ,
                tag: todoData.tag ,
                completed: false ,
                scored: false , 
                id: shortid.generate()
            }))
            setTodoData({
                title: '' ,
                description: '' ,
                tag: '' ,
                time: new Date()
            })
            setAddTask(false)
        }
    }
    const handleChangeInputs = (e) => {
        setTodoData({
            ...todoData ,
            [e.target.name]: e.target.value
        })   
        console.log(todoData)
    }
    const handleChangeTodoTime = (date) => {
        setTodoData({
            ...todoData,
            time: date
        })
    }
   


    const Context = React.createContext({ name: 'Default' });
    const [api, contextHolder] = notification.useNotification();


    const openNotification = placement => {
        api.info({
          message: `Notification`,
          description: <Context.Consumer>{({ name }) => `Please fill out all fields.`}</Context.Consumer>,
          placement,
        });
      };
    

    return(
       
        <div
        style={{width: '100%' , backgroundColor: theme.backgroundColor  }}
        >
            <Row>
                <Col span={5} xl={5} sm={10} lg={5} xs={16}>
                <div style={{backgroundColor: theme.backgroundColor ,
                     color: theme.textColor}} className={styles.drawer}>

                <div className={styles.drawerHeader}>
                    <div>
                    <PermIdentityIcon className={styles.icon} />   Amir Kazemi
                    </div>
                </div>
                <Link href='/'>
                <a>
                <div style={{
                     backgroundColor: theme.TodayBC ,
                     borderLeft: todayBorderLeft ,
                     fontWeight: todayFontWeight
                     }} 
                     className={styles.drawerBtn}
                     >
                    <div className={styles.btnText}>
                    <CalendarTodayIcon style={{color: todayIconColor}} className={styles.btnIcon} />Today
                    </div>
                </div>
                </a>
                </Link>
                <Link href='/Tasks/important'>
                <a>
                <div style={{
                    backgroundColor: theme.ImportantBC ,
                    borderLeft: importantBorderLeft ,
                    fontWeight: importantFontWeight
                }} className={styles.drawerBtn}>
                    <div className={styles.btnText}>
                    <StarBorderIcon style={{color: importantIconColor}} className={styles.btnIcon} />Important
                    </div>
                </div>
                </a>
                </Link>
                <Link href='/Tasks/notCompleted'>
                <a>
                <div style={{
                    backgroundColor: theme.NotCompletedBC ,
                    borderLeft: notCompletedBorderLeft ,
                    fontWeight: notCompletedFontWeight
                }} className={styles.drawerBtn}>
                    <div className={styles.btnText}>
                    <ClearIcon style={{color: notCompletedIconColor}} className={styles.btnIcon} />Not Completed
                    </div>
                </div>
                </a>
                </Link>
                <Link href='/Tasks/completed'>
                <a>
                <div style={{
                    backgroundColor: theme.CompletedBC ,
                    borderLeft: completedBorderLeft ,
                    fontWeight: completedFontWeight
                }} className={styles.drawerBtn}>
                    <div className={styles.btnText}>
                    <DoneIcon style={{color: completedIconColor}} className={styles.btnIcon} />Completed
                    </div>
                </div>
                </a>
                </Link>
            </div>
                </Col>
                <Col span={19} xl={19} sm={14} lg={19} xs={8} >
                        <div className={styles.header}>
                            <Row>
                                <Col span={23} xl={23} sm={21} lg={19} xs={12}>
                                <div className={styles.headerText}>
                                    Today
                                        </div>
                                    <div className={styles.headerDate}>
                                         {date.weekday}, {date.monthName} {date.day}, {date.year}
                                    </div>
                                </Col>
                                <Col span={1} xl={1} sm={3} lg={5} xs={12}>
                                <div className={styles.toggleSwitch}>
                                    {theme.toggleChecked? 
                                    <div>
                                        <Brightness2Icon />  
                                    </div> 
                                    :
                                    <div>
                                        <WbSunnyIcon />
                                    </div>}
                                        <FormControlLabel
                                        control={<Switch color= 'default' checked={theme.toggleChecked} onChange={handleTheme} name="checkedA" />}
                                        /> 
                                    </div>
                                </Col>
                            </Row>
                 </div>
                </Col>
                <Col span={5} xl={5} sm={10} lg={5} xs={16}>
                </Col>
                <Col span={19} xl={19} sm={14} lg={19} xs={8}>
                    <div
                    style={{
                        backgroundColor: theme.backgroundColor ,
                        overflowY: 'auto' ,
                        minHeight: '82vh' ,
                        width: '100%' ,
                        position: 'absolute'
                    }}>
                        <Row>
                            <Col span={2} xl={2} sm={6} lg={4} xs={7}>
                            </Col>
                            <Col span={20} xl={20} sm={12} lg={16} xs={10}>
                                {addTask?
                                <div className={styles.addTaskDiv}>
                                    <label style={{color: theme.textColor , fontSize: '17px' , paddingRight: '5px'}}>
                                        Title:
                                    </label>
                                    <input
                                    style={{color: theme.textColor , backgroundColor: theme.inputsBackground}}
                                    className={styles.inputs}
                                    onChange={handleChangeInputs}
                                    name='title'
                                    maxLength='15'
                                    />
                                    <label style={{color: theme.textColor , fontSize: '17px' , paddingRight: '5px'}}>
                                    Description:
                                    </label>
                                    <textarea
                                    style={{color: theme.textColor , backgroundColor: theme.inputsBackground}}
                                    className={styles.inputs}
                                    onChange={handleChangeInputs}
                                    name='description'
                                    maxLength="100"
                                    placeholder="100 letters are allowed."
                                    />
                                    <label style={{color: theme.textColor , fontSize: '17px' , paddingRight: '5px'}}>
                                        Tag:
                                    </label>
                                    <input
                                    style={{color: theme.textColor , backgroundColor: theme.inputsBackground}}
                                    className={styles.inputs}
                                    onChange={handleChangeInputs}
                                    name='tag'
                                    placeholder='Example: #shop'
                                    maxLength='15'
                                    />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardTimePicker
                                    onChange={handleChangeTodoTime}
                                    className={styles.timePicker}
                                    style={{
                                    width: '100%',
                                    backgroundColor: theme.inputsBackground,
                                    }}
                                    margin="normal"
                                    id="time-picker"
                                    label="Select Time"
                                    value={todoData.time}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                    />
                                    </MuiPickersUtilsProvider>
                                    <div onClick={handleSubmitTask} className={styles.addTask}>
                                        Add
                                    </div>
                                </div>
                                :
                                <div className={styles.addTaskDiv}>
                                <div onClick={handleAddTask} className={styles.addTask}>
                                <AddIcon />
                                Add Task
                                </div>
                            </div>
                            }
                            </Col>
                            <Col span={2} xl={2} sm={6} lg={4} xs={7}>
                            </Col>
                            <Col span={2} xl={2} sm={6} lg={4} xs={7}>
                            </Col>
                            <Col span={20} xl={20} sm={12} lg={16} xs={10}>
                                <div style={{position: 'absolute' , marginTop: '100px' , width: '100%'}}>
                                {children}
                                </div>
                            </Col>
                            <Col span={2} xl={2} sm={6} lg={4} xs={7}>
                            </Col>
                        </Row>
                        </div>
                </Col>
            </Row>
            <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Space>
      </Space>
    </Context.Provider>
        </div>
    )
}



export default Layout