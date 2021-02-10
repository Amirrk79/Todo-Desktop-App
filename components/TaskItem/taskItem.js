import styles from './styles.module.css'
import React , { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { 
    Row ,
    Col 
    }  from 'antd'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import DoneIcon from '@material-ui/icons/Done'
import SetOnSetCompleted from '../../actions/set_unset_completed'
import setUnsetScored from '../../actions/set_unset_scored'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers'
import EditTask from '../../actions/editTask'
import DeleteTask from '../../actions/deleteTask'





function TaskItem({task}) {
    const [theme , setTheme ] = useState(
        {
            textColor: 'black' ,
            backgroundColor: '#fff',
            inputsBackground: '#f5f6f7' ,
        }
    );
    const [todoData , setTodoData] = useState({
        title: task.title ,
        description: task.description ,
        tag: task.tag , 
        time: task.time ,
        completed: task.completed ,
        scored: task.scored ,
        id: task.id
    })
    const [editable , setEditable] = useState(false);
    const [checked , setChecked] = useState({
        checkbox: task.completed
    })
    const [scored , setScored] = useState({
        checkbox: task.scored
    })
    const time = new Date(task.time);
    const dispatch = useDispatch()

    useEffect(() => {

    } 
    ,[])

    const handleCompletedCheckboxChange = () => {
        dispatch(SetOnSetCompleted(
            {
                id: task.id
            }
        ))
        setChecked({
            checkbox: !checked.checkbox
        })
        
    }
    const handleImportantCheckboxCheck = () => {
        dispatch(setUnsetScored({
            id: task.id
        }))
        setScored({
            checkbox: !scored.checkbox
        })
    }
    const handleEdit = () => {
        setEditable(true)
    }
    const handleSaveEdit = () => {
        dispatch(EditTask(todoData))
        setEditable(false)
    }
    const handleChangeInputs = (e) => {
        setTodoData({
            ...todoData,
            [e.target.name]: e.target.value
        })
    }
    const handleTimeChange = (date) => {
        setTodoData({
            ...todoData,
            time: date
        })
    }
    const handeDiscardChanges = () => {
        setTodoData({
        title: task.title ,
        description: task.description ,
        tag: task.tag , 
        time: task.time ,
        completed: task.completed ,
        scored: task.scored ,
        id: task.id
        })
        setEditable(false)
    }

    const handleDeleteTask = () => {
        dispatch(DeleteTask({
            id: task.id
        }))
    }
    return(
        <div>
        {editable?
        <div>
            <div className={styles.mainEdit}>
                                    <label style={{color: theme.textColor , fontSize: '17px' , paddingRight: '5px'}}>
                                        Title:
                                    </label>
                                    <input
                                    style={{color: theme.textColor , backgroundColor: theme.inputsBackground}}
                                    value={todoData.title}
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
                                    value={todoData.description}
                                    onChange={handleChangeInputs}
                                    name='description'
                                    maxLength="100"
                                    />
                                    <label style={{color: theme.textColor , fontSize: '17px' , paddingRight: '5px'}}>
                                        Tag:
                                    </label>
                                    <input
                                    style={{color: theme.textColor , backgroundColor: theme.inputsBackground}}
                                    className={styles.inputs}
                                    value={todoData.tag}
                                    onChange={handleChangeInputs}
                                    name='tag'
                                    maxLength='15'
                                    />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardTimePicker
                                    onChange={handleTimeChange}
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
                                    <div className={styles.modifyBtns}>
                                    <div onClick={handleSaveEdit} className={styles.editTask}>
                                        Save
                                    </div>
                                    <div onClick={handeDiscardChanges} className={styles.editTask}>
                                        Discard
                                    </div>
                                    </div>
                                </div>
        </div>
        :
        <div className={styles.main}>
            <Row>
                <Col span={6} xl={6} sm={6} lg={6} xs={6}>
                    <div className={styles.taskTitle}>
                    <FormControlLabel
                    checked={checked.checkbox}
                        control={
                        <Checkbox icon={<DoneIcon style={{color: '#ebebeb'}} />
                    } 
                    checkedIcon={
                    <DoneIcon style={{color: 'green'}} />} name="checkedH" />
                    }
                    onChange={handleCompletedCheckboxChange}
                     />
                    {task.title}
                    </div>
                </Col>
                <Col span={9} xl={9} sm={9} lg={9} xs={9}>
                    <div className={styles.taskDescription}>
                    {task.description}
                    </div>
                </Col>
                <Col span={6} xl={6} sm={6} lg={6} xs={6}>
                    <div className={styles.taskTag}>
                    {task.tag}
                    <div>
                    {time.getHours()}:{time.getMinutes()}
                    </div>
                    </div>
                </Col>
                <Col span={3} xl={3} sm={3} lg={3} xs={3}>
                <div className={styles.btns}>
                    <div onClick={handleDeleteTask}>
                    <DeleteForeverIcon className={styles.iconBtn} style={{color: 'red'}} />
                    </div>
                    <div onClick={handleEdit}>
                    <EditIcon className={styles.iconBtn} style={{color: 'lawngreen'}} />
                    </div>
                    <FormControlLabel
                    checked={scored.checkbox}
                        control={
                        <Checkbox icon={<StarBorderIcon style={{color: '#ebebeb'}} />
                    } 
                    checkedIcon={
                    <StarIcon style={{color: 'yellow'}} />} name="checkedH" />
                    }
                    onChange={handleImportantCheckboxCheck}
                     />
                </div>
                </Col>
            </Row>
        </div>    
        }
        </div>
    )
}

export default TaskItem