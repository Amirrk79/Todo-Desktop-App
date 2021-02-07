import Head from 'next/head'
import Layout from '../components/layout'
import TaskItem from '../components/TaskItem/taskItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { 
  Row ,
  Col 
  }  from 'antd'

export default function Home() {
  const tasks = useSelector(state => state.tasks)
  return (
    <div>
      <Head>
        <title>Today</title>
      </Head>
      <Layout
          todayBC="#f5f6f7"
          todayDarkBC="#30363d"
          todayBorderLeft="3px solid #415dff"
          todayFontWeight="bold"
          todayIconColor="#6f3cd4"
      >
        <Row>
          <Col span={24}>
            <div>
            {tasks.map(task => {
              return <TaskItem task={task} key={task.id} />
            })}
            </div>
          </Col>
        </Row>
        </Layout>
    </div>
  )
}

