import useForm from "../../hooks/useForm"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { generateObject } from "../../helper/helper"
import { VALIDATIONS_KEYS } from "../../constants/constants"

const {CHECK_EMPTY} = VALIDATIONS_KEYS;

const fields = {username: '', password: ''}

const validationSchema = {
    username: generateObject([CHECK_EMPTY]), 
    password: generateObject([CHECK_EMPTY])
}

const Login = () => {
    const {handleChange, handleSubmit, values, errors} = useForm(handleLogin, fields, validationSchema)

    async function handleLogin(value: any) {
        console.log(value)
    }
    console.log({errors})
    return (
        <div className="w-full h-screen bg-cyan-500">
            <div className="h-full flex flex-wrap justify-center content-center">
                <div className="bg-white p-3 rounded">
                    <h1 className="text-center">Heading</h1>
                    <form onSubmit={handleSubmit}>
                        <Input 
                            label="Username" 
                            name="username" 
                            type="text"
                            value={values?.username} 
                            error={errors?.username} 
                            handleChange={handleChange}
                            layout='column' 
                        />
                        <Input 
                            label="Password" 
                            name="password" 
                            type="password"
                            value={values?.password} 
                            error={errors?.password} 
                            handleChange={handleChange}
                            layout='column' 
                        />
                        <div>
                            <Button type='submit' text='Submit' buttonType='primary'/>
                            <Button type='button' text='Signup' buttonType='secondary'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
