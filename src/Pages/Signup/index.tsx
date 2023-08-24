import { VALIDATIONS_KEYS } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { generateObject } from '../../helper/helper';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/loginActions';

const { CHECK_EMPTY, IS_PASSWORD } = VALIDATIONS_KEYS;

const fields = { 
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    role: '',
    gender: ''
 };

const validationSchema = Object.keys(fields).reduce((obj: any,acc) => Object.assign(obj, {[acc] : generateObject([CHECK_EMPTY])}), {})
validationSchema['password'][IS_PASSWORD] = true 

console.log(validationSchema)

const Signup = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(handleSignup, fields, validationSchema);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleSignup(values: any) {
        dispatch(signUp({username: values?.username, password: values?.password, callback: handleRedirect}))
    }

    const handleRedirect = () => {
        navigate('/')
    }
    return (
        <div className="w-full h-screen bg-cyan-500">
            <div className="h-full flex flex-wrap justify-center content-center">
                <div className="bg-white p-3 rounded">
                    <h1 className="text-center">Heading</h1>
                    <form onSubmit={handleSubmit}>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
