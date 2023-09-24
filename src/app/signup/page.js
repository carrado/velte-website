export default function Signup() {
    return (
        <>
            <div className="w-full h-full flex flex-col mt-4">
                <div className="w-full flex flex-row justify-center">
                    <div className="flex w-2/4 p-4">
                        <div className="my-4 flex flex-col flex-grow justify-center" style={{ minHeight: '75vh' }}>
                            <p className="text-4xl font-semibold text-white capitalize text-center animate__animated animate__backInDown">
                                Create account
                            </p>
                            <p className="text-xl gap-3 text-white capitalize my-5 animate__animated animate__lightSpeedInLeft">
                                Welcome to Velte!
                                enter your details and start creating Ads, connecting with other businesses and selling your products and services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}