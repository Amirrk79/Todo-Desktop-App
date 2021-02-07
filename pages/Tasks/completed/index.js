import Layout from '../../../components/layout'
import Head from 'next/head'

function Completed() {
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
        />
        </div>
    )
}

export default Completed