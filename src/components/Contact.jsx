import { useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
};

export default function Contact() {
    const form = useRef();

    const success = () => toast("Mail sent successfully");
    const failure = () => toast("Oops! Something went wrong");

    const loginSchema = Yup.object({
        user_name: Yup.string().required("Please enter full name"),
        user_email: Yup.string().required("Please enter email id"),

        message: Yup.string().required("Please enter message"),
    });

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        isValid,
        touched,
        dirty,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            emailjs
                .sendForm(
                    "service_tt7p4vs",
                    "template_vib49sm",
                    form.current,
                    "oJLyPTNJ13Nt4L9kM"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        success();
                    },
                    (error) => {
                        console.log(error.text);
                        failure();
                    }
                );
            action.resetForm();
        },
    });

    return (
        <div
            className="h-full bg-[#02040F] text-white flex flex-col justify-around pt-5"
            id="contact"
        >
            <div className="md:relative text-center">
                <h1 className="hidden md:block text-9xl w-full uppercase font-bold opacity-20 text-gray-400">
                    Contact me
                </h1>
                <p className="w-full md:absolute md:top-2/4 md:left-2/4 md:-translate-x-2/4 md:-translate-y-2/4 font-bold text-[#E59500] md:text-3xl text-2xl py-4">
                    Get In Touch
                </p>
            </div>

            <div className="md:flex  my-4 px-6">
                <div className="pl-5 text-lg flex flex-col space-y-5 justify-around sm:flex-wrap md:flex-nowrap">
                    <div>
                        <h1 className="font-semibold uppercase pb-2 text-[#E59500]">Address</h1>
                        <div className="">
                            <p>301, Aakruti flat</p>
                            <p>Manas nagar</p>
                            <p>Zanzarda Rd, Junagadh, </p>
                            <p>Gujarat 360005</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold uppercase pb-2 text-[#E59500]">Contact</h1>
                        <div>
                            <p>+91 9510868349</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold uppercase pb-2 text-[#E59500]">FOLLOW ME</h1>
                        <div className="pr-6 flex space-x-6 text-lg">
                            <a
                                href="https://github.com/RuchitaSenjaliya001"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsLinkedin className="cursor-pointer hover:text-[#E59500] duration-300" />
                            </a>
                            <a
                                href="https://github.com/RuchitaSenjaliya001"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub className="cursor-pointer hover:text-[#E59500] duration-300" />
                            </a>
                            <a
                                href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <MdMail
                                    className="cursor-pointer hover:text-[#E59500] duration-300"
                                    size={21}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    className="col-span-4 grid grid-cols-4 gap-4 w-full py-5 my-6 text-black"
                    ref={form}
                    onSubmit={handleSubmit}
                >
                    <div className="col-span-4 md:col-span-2">
                        <input
                            type="text"
                            name="user_name"
                            value={values.user_name}
                            id="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Name"
                            className="text-lg w-full text-white rounded-lg bg-[#151727] p-3"
                        />
                        {errors.user_name && touched.user_name ? (
                            <p className="text-red-500 text-sm">{errors.user_name}</p>
                        ) : null}
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <input
                            type="email"
                            name="user_email"
                            value={values.user_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"
                            placeholder="Email"
                            className="text-lg w-full text-white rounded-lg bg-[#151727] p-3"
                        />
                        {errors.user_email && touched.user_email ? (
                            <p className="text-red-500 text-sm">{errors.user_email}</p>
                        ) : null}
                    </div>
                    <div className="col-span-4">
                        <textarea
                            name="message"
                            id="feedback"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            cols="60"
                            rows="7"
                            placeholder="Message..."
                            className="text-lg w-full text-white rounded-lg bg-[#151727] p-3"
                        ></textarea>
                        {errors.message && touched.message ? (
                            <p className="text-red-500 text-sm">{errors.message}</p>
                        ) : null}
                    </div>
                    <div className="col-span-4 flex justify-center items-center ">
                        <button
                            disabled={!(isValid && dirty)}
                            className="mt-6 rounded-full px-7 py-3 duration-300 text-lg bg-[#E59500] text-white hover:bg-transparent border-2 hover:text-[#E59500] border-[#E59500] disabled:bg-[#8f8f8f] disabled:text-white disabled:border-[#8f8f8f] disabled:cursor-not-allowed"
                        >
                            Send Now{" "}
                        </button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </form>
            </div>
            <div className="text-center py-4 bg-[#0C0E1C] text-white">
                <p className="text-lg">
                    Copyright &#169; 2023{" "}
                    <span className="text-[#E59500] font-bold">
                        <a href="#">Ruchita.</a>{" "}
                    </span>{" "}
                    All Rights Reserved.
                </p>
            </div>
        </div>
    );
}
