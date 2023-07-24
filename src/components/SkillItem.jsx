/* eslint-disable react/prop-types */


export default function SkillItem({ title, percentage }) {
    return (
        <div className="mb-4 px-5">
            <div className=" flex justify-between items-center">
                <span>{title}</span>
                <span>{percentage}%</span>
            </div>
            <div className={`w-full h-[7px] bg-[#d3d3d3] relative before:absolute before:h-full before:w-[${percentage}%] before:top-0 before:left-0 before:bg-[#E59500]`}></div>
        </div>
    )
}
