
import { useRef } from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tt7p4vs', 'template_vib49sm', form.current, 'oJLyPTNJ13Nt4L9kM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="h-full bg-[#343A40] text-white flex flex-col justify-around pt-5" id="contact">
            <div className="md:relative text-center">
                <h1 className="hidden md:block text-9xl w-full uppercase font-bold opacity-20 text-gray-400">
                    Contact me
                </h1>
                <p className="w-full md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 font-bold text-white md:text-3xl text-2xl py-4">
                    Get In Touch
                </p>
            </div>

            <div className="md:flex  my-4 px-6">
                <div className="pl-5 text-lg flex flex-col space-y-5 justify-around sm:flex-wrap md:flex-nowrap">
                    <div>
                        <h1 className="font-semibold uppercase pb-2">Address</h1>
                        <div>
                            <p>301, Aakruti flat</p>
                            <p>A1-104, Palladium,</p>
                            <p>Corporate Rd, Ahmedabad, </p>
                            <p>Gujarat 380015</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold uppercase pb-2">Contact</h1>
                        <div>
                            <p>+91 9510868349</p>
                            <p>+91 9510868349</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold uppercase pb-2">FOLLOW ME</h1>
                        <div className="pr-6 flex space-x-6 text-lg">
                            <a href="https://github.com/RuchitaSenjaliya001" target="_blank" rel="noreferrer"><BsLinkedin className='cursor-pointer hover:text-[#17C097] duration-300' /></a>
                            <a href="https://github.com/RuchitaSenjaliya001" target="_blank" rel="noreferrer"><BsGithub className='cursor-pointer hover:text-[#17C097] duration-300' /></a>
                            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" target="_blank" rel="noreferrer"><MdMail className='cursor-pointer hover:text-[#17C097] duration-300' size={21} /></a>
                        </div>
                    </div>
                </div>
                <form className="col-span-4 grid grid-cols-4 gap-4 w-full py-5 my-6 text-black" ref={form} onSubmit={sendEmail}>
                    <div className="col-span-4 md:col-span-2">
                        <input
                            type="text"
                            name="user_name"
                            id="name"
                            placeholder="Name"
                            className="text-lg w-full border rounded-lg border-gray-400 p-3"
                        />
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <input
                            type="email"
                            name="user_email"
                            id="email"
                            placeholder="Email"
                            className="text-lg w-full border rounded-lg border-gray-400 p-3"
                        />
                    </div>
                    <div className="col-span-4">
                        <textarea
                            name="message"
                            id="feedback"
                            cols="60"
                            rows="7"
                            placeholder="Tell us more about your needs..."
                            className="text-lg w-full border rounded-lg border-gray-400 p-3"
                        ></textarea>
                    </div>
                    <div className="col-span-4 flex justify-center items-center ">
                        <button className=" mt-6 rounded-full px-7 py-3 duration-300 text-lg bg-[#14c097] text-white hover:bg-[#11a17f]">
                            Send Now{" "}
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-center py-4 bg-[#F8F9FA] text-black">
                <p className="text-lg">
                    Copyright &#169; 2023{" "}
                    <span className="text-[#14c097] font-bold">
                        <a href="#">Ruchita.</a>{" "}
                    </span>{" "}
                    All Rights Reserved.
                </p>
            </div>
        </div>
    );
}
