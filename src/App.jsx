import {Route, Routes} from 'react-router'
import Layout from './components/Layout'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        </Routes>
    </div>
  )
}

export default App