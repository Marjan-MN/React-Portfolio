import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };
  console.log("errors", errors);

  return (
    <div className="form-container pt-4">
      <h2>Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="input-name"
            placeholder="Name"
            onChange={handleChange}
          ></input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
        </div>
        <br />
        <br />
        <div>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="input-email"
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <br />
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </div>
        <br />
        <br />
        <div>
          <textarea
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="input-message"
            placeholder="Message"
            type="description"
            onChange={handleChange}
          ></textarea>
          <br />
          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
        </div>
        <br />
        <button type="submit" onSubmit={handleSubmit(onSubmit)} noValidate>
          Send
        </button>
        <span className="done">
          {done &&
            "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}
        </span>
      </form>
    </div>
  );
}
