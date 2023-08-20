const Button = (props: any) => {
    const {text, type = "button", disabled = false, buttonType = 'primary', handleClick = () => {}} = props
    return (
        <button type={type} disabled={disabled} onClick={handleClick}>{text}</button>
    )
}

export default Button
