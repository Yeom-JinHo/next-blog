import React from "react";
import Logo from "./logo";
import Link from "next/link";
import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo></Logo>
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
