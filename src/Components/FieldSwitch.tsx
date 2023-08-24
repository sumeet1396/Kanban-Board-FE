import { fieldSwitchInterface } from "../types/interface";
import Input from "./Input";

const FieldSwitch = (props: fieldSwitchInterface) => {
    const {type, value, error, handleChange} = props;
    switch(type) {
        case 'select':
            return <span>select</span>
        default:
            return <Input handleChange={handleChange}/>
    }
}

export default FieldSwitch