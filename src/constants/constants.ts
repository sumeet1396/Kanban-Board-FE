const VALIDATIONS_KEYS = {
  CHECK_EMPTY: 'checkEmpty', //to check empty value
  IS_EMAIL: 'isEmail', // email regex validation
  IS_PASSWORD: 'isPassword', // check for password pattern
  IS_PHONE: 'isPhone', //phone regex validation
  IS_NUMBER: 'isNumber', // to check if is number
  MATCH_PASSOWRD: 'matchPassword', // match two passwords
  IS_IMAGE: 'isImage', // check if valid image url
  IS_REQUIRED: 'isRequired', // check for checkbox/radio button
};
  
const FIELD_LABELS: any = {
  title: 'Title',
  fname: 'First Name',
  lname: 'Last Name',
  username: 'User Name',
  email: 'Email',
  phone: 'Phone',
  id: 'ID',
  userId: 'User ID',
  password: 'Password'
};

export {
  VALIDATIONS_KEYS, FIELD_LABELS
}