import Layout from '../../../components/layout'
import Head from 'next/head'
import TaskItem from '../../../components/TaskItem/taskItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { 
  Row ,
  Col 
  }  from 'antd'

function Important() {
  const tasks = useSelector(state => state.tasks)
  const importantTasks = tasks.filter(task => task.scored === true);
    return(
      <div>
        <Head>
          <title>
            Important
          </title>
        </Head>
        <Layout
          importantBC="#f5f6f7"
          importantDarkBC="#30363d"
          importantBorderLeft="3px solid #415dff"
          importantFontWeight="bold"
          importantIconColor="#6f3cd4"
        >
         <Row>
          <Col span={24}>
            <div>
            {importantTasks.map(task => {
              return <TaskItem task={task} key={task.id} />
            })}
            </div>
          </Col>
        </Row>  
        </Layout>
      </div>
    )
}

export default Important