import Layout from '../../../components/layout'
import Head from 'next/head'
import TaskItem from '../../../components/TaskItem/taskItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { 
  Row ,
  Col 
  }  from 'antd'

function Completed() {
    const tasks = useSelector(state => state.tasks)
    const CompletedTasks = tasks.filter(task => task.completed === true);
    return(
        <div>
            <Head>
                <title>Completed</title>
            </Head>
            <Layout
          completedBC="#f5f6f7"
          completedDarkBC="#30363d"
          completedBorderLeft="3px solid #415dff"
          completedFontWeight="bold"
          completedIconColor="#6f3cd4"
        >
            <Row>
          <Col span={24}>
            <div>
            {CompletedTasks.map(task => {
              return <TaskItem task={task} key={task.id} />
            })}
            </div>
          </Col>
        </Row>  
        </Layout>
        </div>
    )
}

export default Completed