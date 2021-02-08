import Layout from '../../../components/layout'
import Head from 'next/head'
import TaskItem from '../../../components/TaskItem/taskItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { 
  Row ,
  Col 
  }  from 'antd'

function NotCompleted() {
    const tasks = useSelector(state => state.tasks)
    const NotCompletedTasks = tasks.filter(task => task.completed === false);
    return(
        <div>
            <Head>
                <title>
                    Not Completed
                </title>
            </Head>
            <Layout
                notCompletedBC="#f5f6f7"
                notCompletedDarkBC="#30363d"
                notCompletedBorderLeft="3px solid #415dff"
                notCompletedFontWeight="bold"
                notCompletedIconColor="#6f3cd4"
            >
                <Row>
          <Col span={24}>
            <div>
            {NotCompletedTasks.map(task => {
              return <TaskItem task={task} key={task.id} />
            })}
            </div>
          </Col>
        </Row>  
            </Layout>
        </div>
    )
}

export default NotCompleted