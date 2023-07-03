import resume from "../assets/resume.pdf";

export default function About() {
    return (
        <div className="flex flex-col justify-around lg:h-[90vh]" id="about">
            <div className="md:relative text-center">
                <h1 className="hidden md:block text-9xl w-full uppercase font-bold opacity-20 text-gray-400">
                    About Me
                </h1>
                <p className="w-full md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 font-bold md:text-3xl text-2xl text-gray-800 py-4">
                    Know Me More
                </p>
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-7 justify-between px-5">
                <div className="md:w-[60%] space-y-6 lg:pl-6 md:px-5">
                    <h1 className="text-xl font-bold md:text-3xl">
                        I&apos;m <span className="text-[#14c097]">Ruchita Senjaliya,</span>{" "}
                        a Web Developer
                    </h1>
                    <p className="">
                        I help you build brand for your business at an affordable price.
                        Thousands of clients have procured exceptional results while working
                        with our dedicated team. when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                    <p className="">
                        Delivering work within time and budget which meets client’s
                        requirements is our moto. Lorem Ipsum has been the industry&apos;s
                        standard dummy text ever when an unknown printer took a galley.
                    </p>
                </div>
                <div className="w-full md:w-[30%]">
                    <ul className="flex flex-col space-y-2 lg:space-y-4">
                        <li className="text-lg">
                            <span className="font-bold">Name:</span> Ruchita Senjaliya
                        </li>
                        <li className="text-lg text-[#14c097]">
                            <span className="font-bold text-black">Email:</span>{" "}
                            senjaliyaruchita@gmail.com
                        </li>
                        <li className="text-lg">
                            <span className="font-bold">Age:</span> 21
                        </li>
                        <li className="text-lg">
                            <span className="font-bold">From:</span> Ahmedabad, Gujarat
                        </li>
                    </ul>
                    <a href={resume} download="Resume">
                        <button className="block mt-6 rounded-full px-7 py-3 duration-300 text-lg bg-[#14c097] text-white hover:bg-[#11a17f]">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>

            {/* <div className="flex justify-around items-center flex-wrap lg:flex-nowrap text-center p-5 ">
                <div className="px-3">
                    <h1 className="text-5xl font-semibold text-gray-500">1+</h1>
                    <p className="pt-3">Years Experience</p>
                </div>
                <div className="px-3">
                    <h1 className="text-5xl font-semibold text-gray-500">20+</h1>
                    <p className="pt-3">Projects Done</p>
                </div>
                <div className="px-3">
                    <h1 className="text-5xl font-semibold text-gray-500">2+</h1>
                    <p className="pt-3">Happy Clients</p>
                </div>
                <div className="px-3">
                    <h1 className="text-5xl font-semibold text-gray-500">10+</h1>
                    <p className="pt-3">Get Rewards</p>
                </div>
            </div> */}
        </div>
    );
}
