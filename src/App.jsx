import './App.css'
import Button from './components/button'
import Input from './components/input'
import  {Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction, CardDescription } from './components/card'
import Modal from './components/modal'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div className="flex justify-center items-center h-screen " > 
      <Button variant="outline" text="login" onClick={() => setShowModal(true)} /> 
    </div>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Card >
        <CardHeader >
          <div className="flex flex-col gap-2 w-2/3"> 
            <CardTitle title="Login to your account" />
            <CardDescription description="Enter your email to below to login to your account" />  
          </div>
          <CardAction>
            <Button variant="link" text="sign up" />
          </CardAction>
        </CardHeader>
        <form>
        <CardContent>
          <Input type="email" placeholder="example@gmail.com" lable="Email" />
          <Input type="password"  lable="Password" title="Forgot password?" />
        </CardContent>
        </form>
        <CardFooter >
          <Button variant="default" text="Login" className="w-full hover:bg-gray-900" />
          <Button variant="outline" text="Sign in with google" className="w-full  mt-2" />
        </CardFooter>
        
      </Card>
    </Modal>
    </>
  )
}

export default App
