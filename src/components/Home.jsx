
import bg1 from '../assets/bg-1.jpg'

export default function Home() {
    return (
        <div className={`relative flex items-center`}>
            <img src={bg1} alt="bg-img" className="h-screen w-full object-cover brightness-[0.2]" />
            <div className="absolute w-full text-center text-white flex flex-col justify-center items-center space-y-4">
                <p className="text-xl text-[#E59500]">Welcome</p>
                <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-bold">I&apos;m Ruchita Senjaliya</h1>
                <p className="text-xl">based in Gujarat India.</p>
                <a href="#contact"><button className="block border-2 rounded-full px-6 py-2 duration-300 text-lg text-[#E59500] border-[#E59500] hover:bg-[#E59500] hover:text-white">Hire Me</button></a>
            </div>
        </div>
    )
}
