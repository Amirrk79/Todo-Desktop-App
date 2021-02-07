import Layout from '../../../components/layout'
import Head from 'next/head'

function Important() {
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
        />
      </div>
    )
}

export default Important