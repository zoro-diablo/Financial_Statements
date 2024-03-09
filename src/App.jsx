import {Routes,Route} from 'react-router-dom'
import ItForm from './routes/ItForm'
import BillForm from './routes/BillForm'
import Master from './routes/Master'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItForm />} />
        <Route path="/billform" element={<BillForm />} />
        <Route path="/master" element={<Master />} />
      </Routes>
    </div>
  )
}
export default App