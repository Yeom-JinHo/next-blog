import React, { useEffect, useState } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [reqStatus, setReqStatus] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);
  async function sendMsgHanlder(e) {
    e.preventDefault();

    setReqStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, name, msg }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setReqStatus("success");
      setEmail("");
      setName("");
      setMsg("");
    } catch (e) {
      setReqStatus("error");
      throw new Error(e.message || "뭔가 잘못되었어요!");
    }
  }
  let notification;
  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "메세지가 전송중",
      message: "잠시만 가디려주세요.",
    };
  }
  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "메세지 전송성공!",
      message: "메세지 전송에 성공하였습니다.",
    };
  }
  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "메세지 전송실패!",
      message: "다시 한번 시도해주세요.",
    };
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
      {notification && <Notification noti={notification} />}
    </section>
  );
};

export default ContactForm;
