
import './App.css'
import Button from './components/button'
import Input from './components/input'


function App() {

  return (
    <>
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <Input type="file" placeholder="Enter your name" />
      <Button variant="secondary" text="Click me" />
    </div>
      
    </>
  )
}

export default App
