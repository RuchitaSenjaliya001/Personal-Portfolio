import SkillItem from "./SkillItem";

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
            <div className=" md:flex flex-wrap justify-around items-center px-5 py-10 text-white">
                <div className="text-lg md:w-[45%] md:pl-10 ">

                    <p className="text-justify pb-3">As a React developer, I possess a unique blend of technical expertise, problem-solving skills, and a strong passion for creating intuitive user interfaces.</p>

                    <p className="text-justify pb-3">Throughout my journey, I have gained valuable hands-on experience in building interactive and responsive web applications.</p>

                    <p className="text-justify">Moreover, I have a strong work ethic and excellent time management skills, allowing me to meet deadlines and deliver projects on time.</p>
                </div>
                <div className="md:w-[43%] pt-8 ">
                    <SkillItem title="HTML" percentage="90" />
                    <SkillItem title="CSS" percentage="70" />
                    <SkillItem title="JavaScript" percentage="70" />
                    <SkillItem title="React js" percentage="80" />
                    <SkillItem title="Next JS" percentage="60" />
                    <SkillItem title="Tailwind CSS" percentage="95" />
                    <SkillItem title="Mongo DB" percentage="30" />
                </div>

            </div>
        </div>
    )
}
