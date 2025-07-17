const cardVariants = {
    default: "bg-white border border-gray-200 rounded-lg shadow-sm",
    elevated: "bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow",
    outlined: "bg-transparent border-2 border-gray-300 rounded-lg",
    filled: "bg-gray-50 border border-gray-200 rounded-lg"
}

function Card({ variant = "default", children, className = "" }) {
    return (
        <div className={`${cardVariants[variant]} ${className} w-full max-w-md bg-white p-4 flex flex-col`}>
            {children}
        </div>
    )
}
function CardAction({ children, className = "" }) {
    return (
        <div className={`p-6 pb-0 flex items-center justify-between ${className}`}>
            {children}
        </div>
    )
}
function CardHeader({ children, className = "" }) {
    return (
        <div className={`p-6 pb-0 flex flex-row items-center justify-between mb-4 ${className}`}>
            {children}
        </div>
    )
}

function CardTitle({ className = "" , title}) {
    return (
        <div className={`text-lg font-semibold ${className}`}>
            {title}
        </div>
    )
}

function CardDescription({ className = "" , description}) {
    return (
        <p className={`text-sm text-gray-500 mt-1 ${className}`}>
            {description}
        </p>
    )
}

function CardContent({ children, className = "" }) {
    return (
        <div className={`p-6 pt-0 flex flex-col gap-4 ${className}`}>
            {children}
        </div>
    )
}

function CardFooter({ children, className = "" }) {
    return (
        <div className={` w-full p-6 pt-0 ${className}`}>
            {children}
        </div>
    )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } 