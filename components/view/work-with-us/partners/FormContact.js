function FormContact({setIsModalOpen}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-[700px] relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={() => setIsModalOpen(false)}
                >
                    ✕
                </button>
                <h2 className="text-xl font-bold mb-4">Tell us about yourself & we will get in touch right away</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Company Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Company Name"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Training Need<span className="text-red-500">*</span>
                            </label>
                            <select className="w-full border border-gray-300 rounded px-4 py-2">
                                <option>Select an Option</option>
                                <option>Technical</option>
                                <option>Management</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Email ID<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Phone Number<span className="text-red-500">*</span>
                            </label>
                            <div className="flex border border-gray-300 rounded overflow-hidden">
                                <span className="flex items-center px-3 bg-gray-100 border-r border-gray-300">
                                    <img
                                        src="https://flagcdn.com/in.svg"
                                        alt="India"
                                        className="w-5 h-5 mr-1"
                                    />
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-2 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Query</label>
                        <textarea
                            placeholder="Enter your Query"
                            rows="3"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
                    >
                        SUBMIT
                    </button>
                </form>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
export default FormContact;