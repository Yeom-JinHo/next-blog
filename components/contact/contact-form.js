import React, { useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  function sendMsgHanlder(e) {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, name, msg }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1>언제든지 연락주세요--!</h1>
      <form className={classes.form} onSubmit={sendMsgHanlder}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">이름</label>
            <input
              type="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="msg">내용</label>
          <textarea
            id="msg"
            rows={5}
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>메세지 전송</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
