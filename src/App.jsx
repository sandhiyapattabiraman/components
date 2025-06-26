
import './App.css'
import Button from './components/button'
import Input from './components/input'
import  {Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction, CardDescription } from './components/card'


function App() {

  return (
    <>


    <div className="flex flex-col gap-4 justify-center items-center h-screen"> 
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
        <CardContent>
          <Input type="text" placeholder="example@gmail.com" lable="Email" />
          <Input type="password"  lable="Password" title="Forgot password?" />
        </CardContent>
        <CardFooter >
          <Button variant="default" text="Login" className="w-full hover:bg-gray-900" />
          <Button variant="outline" text="Sign in with google" className="w-full  mt-2" />
        </CardFooter>
      </Card>
      </div>

    </>
  )
}

export default App
