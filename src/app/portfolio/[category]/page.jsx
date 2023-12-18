import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const data = [
  {
    id: 0,
    name: "Creative Portfolio",
    imgSrc:
      "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    name: "Minimal Single Product",
    imgSrc:
      "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Strong Together Charity",
    imgSrc:
      "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((cat) => (
        <div key={cat.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{cat.name}</h1>
            <p className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis cum distinctio nemo accusamus eaque. Beatae, magnam
              dolor amet enim vel dolores eius iusto animi? Magni dolorum amet,
              architecto accusantium nulla voluptas expedita unde debitis id,
              possimus quidem. Aut commodi unde nesciunt numquam velit deserunt
              nisi earum esse, iure laboriosam! Rerum ipsam beatae quae facere
              tenetur. Voluptatem quos perferendis, pariatur error iste quisquam
              atque optio. Tempora eum consectetur est rem iusto.
            </p>
            <Button title={"See More"} url={"/"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              alt="image"
              fill={true}
              src={cat.imgSrc}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
