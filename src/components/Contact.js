
const Contact = ()=>{
    return(
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-8  from-indigo-500 to-purple-600">
            <div className="bg-white rounded-xl shadow-2xl p-12 max-w-md w-full animate-slideIn">
                <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Contact Us</h1>
                <p className="text-lg text-gray-600 text-center mb-8">We'd love to hear from you. Send us a message!</p>
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder="Enter your name" 
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-gray-50 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email" 
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-gray-50 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-semibold text-gray-700">Message</label>
                        <textarea 
                            id="message"
                            placeholder="Enter your message" 
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-gray-50 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 resize-vertical"
                            rows="5"
                        ></textarea>
                    </div>
                    <button type="submit" className="py-3 px-8 from-indigo-500 to-purple-600 text-white border-none rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 mt-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">Send Message</button>
                </form>
            </div>
        </div>
    )
}


export default Contact