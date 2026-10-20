
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <div className="flex flex-wrap gap-6 p-4">
        <Card username="chaiaurcode" btnText="click me" />
        <Card username="hitesh" />
      </div>
    </>
  )
}

export default App
