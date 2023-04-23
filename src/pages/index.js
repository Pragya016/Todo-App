import Head from "next/head";
import styles from "../styles/home.module.css";
import { useState } from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/Si";

export default function Home() {
  const [enteredValue, setEnteredvalue] = useState("");
  const [listData, setListData] = useState([]);

  const inputValueHandler = (e) => {
    setEnteredvalue(e.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredValue === "") {
      alert("Input field must not be empty.");
      return;
    }

    setListData((listData) => {
      const updatedList = [...listData, enteredValue];
      setEnteredvalue("");
      return updatedList;
    });
  };

  const removeTodoHandler = (id) => {
    const updatedList = listData.filter((el, i) => i !== id);
    setListData(updatedList);
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <div className={styles.container}>
        <h1>Just do it.</h1>
        <form onSubmit={formSubmissionHandler}>
          <input
            type="text"
            placeholder="Add a task..."
            onChange={inputValueHandler}
            value={enteredValue}
          />
          <button type="submit" className={styles.submitButton}>
            I got this!
          </button>
        </form>
        {listData !== [] &&
          listData.map((todo, i) => {
            return (
              <p key={i} className={styles.todoList}>
                <div>
                  {i + 1}. {todo}
                </div>
                <div>
                  <button onClick={() => removeTodoHandler(i)}>remove</button>
                </div>
              </p>
            );
          })}
      </div>
      <footer className={styles.footer}>
        <p>Contact</p>
        <p className={styles.contact}>
          <a href="https://twitter.com/praggu_16/">
            {" "}
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/praggu_16/">
            {" "}
            <BsInstagram />
          </a>
          <a href="mailto:pragyasaxena8279@gmail.com">
            {" "}
            <SiGmail />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069720307633">
            {" "}
            <BsFacebook />
          </a>
        </p>
        <p>© 2003 PRAGYA SAXENA</p>
        <p>Terms and conditions | Privacy | Legal notice</p>
      </footer>
    </>
  );
}
