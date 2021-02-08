import { Provider } from 'react-redux'
import { useStore } from '../store'
import '../styles/global.css'


 

function MyApp({ Component, pageProps }) {
  
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
