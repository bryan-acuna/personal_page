interface LoaderProps {
    isLoading: boolean
}

const Loader = ({ isLoading }: LoaderProps) => {
    return (
        <div
            className={` ${
                isLoading
                    ? 'opacity-100 w-full h-full'
                    : 'opacity-0 pointer-events-none'
            } fixed inset-0 bg-white dark:bg-gray-900 grid place-items-center transition-opacity
         duration-1000 ease-in-out z-50`}
        >
            <div
                className="w-12 h-12 border-4 border-gray-300 border-t-red-500 
                           dark:border-gray-600 dark:border-t-yellow-500 
                           rounded-full animate-spin"
                role="status"
                aria-label="Loading"
            />
        </div>
    )
}

export default Loader
