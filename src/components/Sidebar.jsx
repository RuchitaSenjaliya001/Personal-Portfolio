
import profile from '../assets/profile.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

export default function Sidebar() {
    return (
        <>
            <div className="w-full fixed lg:sticky top-0 flex lg:flex-col justify-between items-center bg-[#111418] text-white lg:w-2/12 lg:h-screen p-5 z-10">
                <div className="hidden lg:block">
                    <img src={profile} alt="" className="w-44 h-44 border-8 border-gray-700 object-cover rounded-full shadow-lg" />
                    <h3 className="text-center text-xl font-semibold pt-3 ">Ruchita Senjaliya</h3>
                </div>

                <ul className="hidden md:flex sm:space-x-5 lg:space-x-0 lg:flex-col lg:space-y-5 text-center cursor-pointer text-lg">
                    <li className="hover:text-[#17C097] duration-300">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-[#17C097] duration-300">
                        <a href="#about">About Me</a>
                    </li>

                    <li className="hover:text-[#17C097] duration-300">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="hover:text-[#17C097] duration-300">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <h3 className=" text-xl text-white font-semibold md:hidden">Ruchita Senjaliya</h3>
                <div className="pr-6 flex items-center space-x-6 text-lg">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><BsLinkedin className='cursor-pointer hover:text-[#17C097] duration-300' /></a>
                    <a href="https://github.com/RuchitaSenjaliya001" target="_blank" rel="noreferrer"><BsGithub className='cursor-pointer hover:text-[#17C097] duration-300' /></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" target="_blank" rel="noreferrer"><MdMail className='cursor-pointer hover:text-[#17C097] duration-300' size={21} /></a>
                </div>
            </div>
        </>
    )
}
