const variantStyle = {
    default: "bg-black text-white p-2 rounded-md",
    secondary: "bg-gray-100 text-black p-2 rounded-md",
    destructive: "bg-red-600 text-white p-2 rounded-md",
    outline: "border-1 border-gray-200 text-black p-2 rounded-md hover:bg-gray-100",
    ghost: "rounded-md p-2 hover:bg-gray-100",
    link: "text-black hover:underline hover:underline-offset-3 p-2"
        
}


function Button({variant, text, className}) {
    return(
            <div>
                <button className={`${variantStyle[variant]} ${className}`}>
                    {text}
                </button>
            </div>
    )
}




export default Button;