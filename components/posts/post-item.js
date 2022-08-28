import React from "react";
import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

const PostItem = ({ post: { title, image, excerpt, date, slug } }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imgPath = `image/posts/${slug}/${image}`;
  return (
    <li>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imgPath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
