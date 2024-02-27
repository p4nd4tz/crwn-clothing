const Button = ({ type = "button", backgroundColor = "bg-black", textColor = "text-white", inverse = false, children, className, ...props }) => {
    return (
        <button
            type={type}
            className={`${backgroundColor} ${textColor} font-medium
                flex justify-center align-middle text-center border-none mt-2 uppercase 
                rounded-md transition-all duration-300
                ${className}`
            }
            {...props}
        >
            {children}
        </button>
    )
}


export default Button