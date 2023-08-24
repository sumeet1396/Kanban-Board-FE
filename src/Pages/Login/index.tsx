import { useState } from 'react';
import useForm from '../../hooks/useForm';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { generateObject } from '../../helper/helper';
import { VALIDATIONS_KEYS } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/loginActions';
import { Switch } from '@headlessui/react'

const { CHECK_EMPTY } = VALIDATIONS_KEYS;

const fields = { username: '', password: '' };

const validationSchema = {
  username: generateObject([CHECK_EMPTY]),
  password: generateObject([CHECK_EMPTY]),
};

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(handleLogin, fields, validationSchema);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [enabled, setEnabled] = useState(false)

  async function handleLogin(value: any) {
    dispatch(login({username: values?.username, password: values?.password, enabled, callback: handleRedirect}))
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
            <Input
              label="Username"
              name="username"
              type="text"
              value={values?.username}
              error={errors?.username}
              handleChange={handleChange}
              layout="column"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={values?.password}
              error={errors?.password}
              handleChange={handleChange}
              layout="column"
            />
            <div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                    <span className="sr-only">Remember me</span>
                    <span
                        className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
            </div>
            <div>
                <Link to='/forgot-password'>Forgot password</Link>
            </div>
            <div>
              <Button type="submit" text="Submit" buttonType="primary" handleClick={handleSubmit}/>
              <Button type="button" text="Signup" buttonType="secondary" handleClick={() => navigate('/signup')}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
