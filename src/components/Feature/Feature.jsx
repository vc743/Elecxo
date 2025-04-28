export const Feature = ({ title, icon, text }) => {
    return (
        <article className="p-4">
            <div className="flex items-center justify-center bg-gray-300 rounded-full w-12 h-12 mx-auto mb-4">
                {icon}
            </div>
            <h3 className="font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray-500">
                {text}
            </p>
        </article>
    )
}
