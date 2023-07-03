

export default function Skills() {
    return (
        <div className="bg-[#343A40] py-5" id="skills">
            <div className="md:relative text-center">
                <h1 className="hidden md:block text-9xl w-full uppercase font-bold opacity-20 text-gray-400">
                    Programming
                </h1>
                <p className="w-full md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 font-bold md:text-3xl text-2xl text-white py-4">
                    My Skills
                </p>
            </div>
            <div className="skill-content flex flex-wrap justify-between items-center px-5 py-10 text-white">
                <div className="column left w-[42%] pl-10">

                    <p className="text-justify pb-3">As a React developer, I possess a unique blend of technical expertise, problem-solving skills, and a strong passion for creating intuitive user interfaces.</p>

                    <p className="text-justify pb-3">Throughout my journey, I have gained valuable hands-on experience in building interactive and responsive web applications.</p>

                    <p className="text-justify">Moreover, I have a strong work ethic and excellent time management skills, allowing me to meet deadlines and deliver projects on time.</p>
                </div>
                <div className="w-[43%]">
                    <div className=" mb-4 px-5">
                        <div className=" flex justify-between items-center">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[90%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                    <div className="mb-4 px-5">
                        <div className="flex justify-between items-center">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[70%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                    <div className="mb-4 px-5">
                        <div className="flex justify-between items-center">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[70%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                    <div className="mb-4 px-5">
                        <div className="flex justify-between items-center">
                            <span>React js</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[80%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                    <div className="mb-4 px-5">
                        <div className="flex justify-between items-center">
                            <span>Next JS</span>
                            <span>60%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[60%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                    <div className="mb-4 px-5">
                        <div className="flex justify-between items-center">
                            <span>Tailwind CSS</span>
                            <span>95%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[95%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                    <div className="mb-4 px-5">
                        <div className="flex justify-between items-center">
                            <span>Mongo DB</span>
                            <span>30%</span>
                        </div>
                        <div className="w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[30%] before:top-0 before:left-0 before:bg-teal-500"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
