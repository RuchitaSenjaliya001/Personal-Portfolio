
import bg1 from '../assets/bg-1.jpg'

export default function Home() {
    return (
        <div className={`relative bg-[url(${bg1})] bg-cover min-h-screen w-full before-img flex items-center`}>
            <div className="absolute w-full text-center text-white flex flex-col justify-center items-center space-y-4">
                <p className="text-xl">Welcome</p>
                <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-bold">I&apos;m Ruchita Senjaliya</h1>
                <p className="text-xl">based in Gujarat India.</p>
                <button className="block border-2 rounded-full px-6 py-2 duration-300 text-lg border-[#17C097] hover:bg-[#14c097]">Hire Me</button>
            </div>
        </div>
    )
}
