function TrustedBy() {
    return (
        <div className="bg-white shadow-sm mb-5 p-3">
            <div className="mx-auto max-w-7xl flex items-center  ">
                <div className="text-gray-500">
                    Trusted by
                </div>

                <div className="grid grid-cols-2 gap-y-16 sm:grid-cols-3 sm:gap-x-12 lg:grid-cols-5 lg:gap-x-8 ml-8 ">
                    <div className="flex items-center mx-3 ">
                        <img
                            className="h-12"
                            src={"/images/cisco-logo.png"}
                        />
                    </div>
                    <div className="flex items-center mx-3 ">
                        <img
                            className="h-12"
                            src={"/images/tcs-logo.png"}
                        />
                    </div>
                    <div className="flex items-center mx-3 ">
                        <img
                            className="h-12"
                            src={"/images/infosys-logo.png"}
                        />
                    </div>
                    <div className="flex items-center mx-3 ">
                        <img
                            className="h-12"
                            src={"/images/merc-logo.png"}
                        />
                    </div>
                    <div className="flex items-center mx-3 ">
                        <img
                            className="h-12"
                            src={"/images/visa-logo.png"}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default TrustedBy;