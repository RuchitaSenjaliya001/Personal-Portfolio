// import p1 from '../assets/p1.jpg'
// import p2 from '../assets/p2.jpg'
// import p3 from '../assets/p3.jpg'
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import "../index.css";
import FlippableCard from "./FlippableCard";
// import p5 from '../assets/p5.jpg'
// import p6 from '../assets/p6.jpg'
// import p8 from '../assets/p8.jpg'

export default function Portfolio() {
    return (
        <div className="bg-[#343A40] pb-5" id="portfolio">
            <div className="md:relative text-center">
                <h1 className="hidden md:block text-9xl w-full uppercase font-bold opacity-20 text-gray-400">
                    Portfolio
                </h1>
                <p className="w-full md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 font-bold  md:text-3xl text-2xl py-4 text-white">
                    My Work
                </p>
            </div>
            <div className="w-4/5 m-auto my-5 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                    <FlippableCard
                        title="Blog Post"
                        desc="Web-based application that is designed to help users manage their blog posts effectively. The application is built using React JS and Tailwind CSS"
                        image={p9}
                        visit="https://project-2-post-management.vercel.app"
                        hash="#ReactJs &nbsp;  #Tailwind CSS  &nbsp;  #localStorage"
                        gitUrl="https://github.com/RuchitaSenjaliya001/Project-2-Post-Management"
                    />

                    <FlippableCard
                        title="HR management"
                        desc="Web-based application that is designed to maintain a central
                        repository of employee information, including personal details,
                        contact information and performance records"
                        image={p10}
                        hash="#NextJs &nbsp; #Tailwind CSS &nbsp; #react table &nbsp; #FullCalender"
                        gitUrl="https://github.com/RuchitaSenjaliya001/Hr-Management"
                    />
                    <FlippableCard
                        title="User Diaries"
                        desc="Web-based application that is designed to fetch user information, including personal details, post created by that user, charts."
                        image={p11}
                        hash="#NextJs &nbsp; #Tailwind CSS &nbsp;  #graphql &nbsp;  #Apollo Client"
                        gitUrl="https://github.com/RuchitaSenjaliya001/User-Diaries"
                    />

                </div>
            </div>
        </div>
    );
}
