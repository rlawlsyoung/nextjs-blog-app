import { useState, useRef, useEffect } from "react";

import Notification from "../ui/notification";
import { MessageType } from "@/pages/api/contact";
import classes from "./contact-form.module.css";

const sendContactData = async (contactDetails: MessageType) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [requestStatus, setRequestStatus] = useState<string | null>(); // pending, success, error
  const [requestError, setRequestError] = useState<string>("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage = {
      email: emailRef.current!.value,
      name: nameRef.current!.value,
      message: messageRef.current!.value,
    };

    setRequestStatus("pending");

    try {
      await sendContactData(newMessage);
      setRequestStatus("success");
    } catch (err: any) {
      setRequestError(err.message);
      setRequestStatus("error");
    }
  };

  emailRef.current!.value = "";
  nameRef.current!.value = "";
  messageRef.current!.value = "";

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way.",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully.",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={messageRef} required></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
