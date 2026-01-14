import NavigationCircles from '../NavigationCircles/NavigationCircles'

const Contact = () => {
    return (
        <div
            id="contact"
            className="h-dvh flex flex-col justify-center items-center"
        >
            <h2 className="text-4xl font-light md:mb-32 mb-24">
                Connect with Me
            </h2>
            <form className="flex flex-col lg:space-y-12 space-y-8">
                <input
                    type="email"
                    placeholder="Email"
                    className="md:w-125 w-82.5 h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 
                    placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
                />
                <textarea
                    className="md:w-125 w-82.5 h-13 min-h-25 max-h-50 resize-y border text-lg
                    border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50
                    outline-0 pl-3 transition-colors duration-500"
                    name=""
                    id=""
                    placeholder="Message"
                ></textarea>
                <input
                    value="Stay Connected"
                    className="md:w-125 w-82.5 h-13 max-h-25 text-lg outline-0 bg-red-500 dark:bg-yellow-500 
                    text-white dark:text-gray-900 font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500 uppercase "
                    type="submit"
                />
            </form>
            <NavigationCircles page="contact" />
        </div>
    )
}

export default Contact
