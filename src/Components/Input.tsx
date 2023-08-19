const Input = (props: any) => {
    const {label, value, error, type, handleChange, name, layout ='row'} = props
    return (
        <div className={`flex ${layout === 'column' ? 'flex-col' : 'flex-row'}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <input type={type} id={name} name={name} placeholder={label} value={value} onChange={handleChange}/>
            {error && <span className="error-text">{error}</span>}
        </div>
    )
}

export default Input;