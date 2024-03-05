import {Routes,Route} from 'react-router-dom'
import ItForm from './routes/ItForm'
import BillForm from './routes/BillForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItForm />} />
        <Route path="/billform" element={<BillForm />} />
      </Routes>
    </div>
  )
}
export default App