const Button = (props: any) => {
    const {text, type = "button", disabled = false, buttonType = 'primary'} = props
    return (
        <button type={type} disabled={disabled}>{text}</button>
    )
}

export default Button
