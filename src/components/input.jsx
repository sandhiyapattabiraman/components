


function Input({lable, type, placeholder, className, subtitle }) {
    return (
            <div className={`flex flex-col gap-2  ${className}`}>
                <label htmlFor={lable}>{lable}</label>
                {type == "file" && (
                    <div className="flex flex-col gap-2 w-full">   
                        <input type={type} placeholder={placeholder} className="border-2 border-gray-300 rounded-md p-2 " />
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                )}
                {type == "text" && (
                    <div className="flex flex-col gap-2 w-full">   
                        <input type={type} placeholder={placeholder} className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-3 focus:ring-gray-300"  />
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                )}
                {type == "number"    && (
                    <div className="flex flex-col gap-2 w-full">
                        <input type={type} placeholder={placeholder} className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-3 focus:ring-gray-300"  />
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                )}
                
            </div>
        
    )
}

export default Input;