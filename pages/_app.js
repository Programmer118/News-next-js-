import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  var api = "03059657ea6b42408e9780a00d032927"
  return<>
  <Navbar/>
   <Component api={api} {...pageProps} />
  </>
}
