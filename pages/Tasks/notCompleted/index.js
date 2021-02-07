import Layout from '../../../components/layout'
import Head from 'next/head'

function NotCompleted() {
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
            />
        </div>
    )
}

export default NotCompleted