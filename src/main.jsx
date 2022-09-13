import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import App from './App'
import './style.css'

const theme = extendTheme({
  fonts: {
    body: 'Open Sans',
    heading: 'LORD OF THE RING',
    text: 'Open Sans'
  },
  components:{
    Button: {
      variants: {
        social : {
          border: '1px solid whiteAlpha.800',
          _hover: {
            border: '1px solid orange',
            bg: 'black'
          },
          fontFamily: 'Helvetica'
        }
      }
    }
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)