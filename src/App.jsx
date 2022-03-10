import { Card } from './components/Card'
import { Abaut } from './components/Abaut'

function App() {
  return (
    <div style={{ 
      "display": "flex", 
      "flexDirection": "column" , 
      "justifyContent": "center",
      "alignItems" : "center" 
    }}>
      <Card />
      <Abaut />
    </div>
  )
}

export default App
