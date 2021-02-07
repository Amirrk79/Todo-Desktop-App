import styles from './styles.module.css'
import React , { useState } from 'react'
import { 
    Row ,
    Col 
    }  from 'antd'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import DoneIcon from '@material-ui/icons/Done';




function TaskItem({task}) {
    const [checked , setChecked] = useState(true)
    const time = new Date(task.time);
    console.log(time.getHours())
    return(
        <div className={styles.main}>
            <Row>
                <Col span={6} xl={6} sm={6} lg={6} xs={6}>
                    <div className={styles.taskTitle}>
                    <FormControlLabel
                    checked={checked}
                        control={
                        <Checkbox icon={<DoneIcon style={{color: '#ebebeb'}} />
                    } 
                    checkedIcon={
                    <DoneIcon style={{color: 'green'}} />} name="checkedH" />
                    }
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
                
                </Col>
            </Row>
        </div>
    )
}

export default TaskItem