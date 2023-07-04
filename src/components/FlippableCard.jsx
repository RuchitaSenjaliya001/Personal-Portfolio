/* eslint-disable react/prop-types */

import { BsGithub } from "react-icons/bs";
import "../index.css";

export default function FlippableCard({ title, desc, image, hash, gitUrl, visit }) {
    return (
        <div className="flip-card bg-[#e3efee] rounded-tr-[35px] rounded-bl-[35px] p-4 h-80 min-w-[320px]">
            <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col justify-between py-5">
                    <h1 className="text-3xl font-bold pb-10 text-center text-teal-700">
                        {title}
                    </h1>
                    <p className="px-5 text-justify">{desc}</p>
                </div>
                <div className="flip-card-back flex flex-col justify-between py-3">
                    <div className="flex-[100%] sm:flex-[33.33%] md:flex-[25%] md:p-3">
                        <img
                            src={image}
                            alt="img"
                            className="w-full rounded hover:scale-105 duration-500"
                        />
                    </div>
                    <hr className="mb-5 h-[2.5px] bg-black" />
                    <p className="font-semibold">{hash}</p>
                    <div className="pr-6 flex space-x-6 items-center text-lg max-w-[100px] m-auto py-2">
                        <a href={gitUrl} target="_blank" rel="noreferrer">
                            <BsGithub
                                className="cursor-pointer hover:text-[#17C097] duration-300"
                                size={25}
                            />
                        </a>

                        <a
                            href={visit}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#14c097] text-white px-7 py-1.5 hover:bg-[#11a17f] duration-300 rounded-lg"
                        >
                            Visit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
