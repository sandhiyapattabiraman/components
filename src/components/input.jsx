


function Input({lable, type, placeholder, className, subtitle, title }) {
    return (
            <div className={`flex flex-col gap-2  ${className}`}>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor={lable}>{lable}</label>
                    <p className="text-sm text-gray-800 hover:underline hover:underline-offset-4 cursor-pointer">{title}</p>
                </div>

                {type == "file" && (
                    <div className="flex flex-col gap-2 w-full">   
                        <input type={type} placeholder={placeholder} className="border-2 border-gray-300 rounded-md p-2 " />
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                )}
                {(type) && (
                    <div className="flex flex-col gap-2 w-full">   
                        <input type={type} placeholder={placeholder} className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-3 focus:ring-gray-300"  />
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                )}
            </div>
        
    )
}

export default Input;