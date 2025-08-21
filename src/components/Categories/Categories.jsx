

import "swiper/css";
import Button from '../UI/Button/Button'
import styles from './Categories.module.css'
import {useState , useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
const URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
const Categories = (props) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }} 
        fetchCategories(); 
    },[])
    if (categories.length === 0) {
        return <div>Loading...</div>;
    }
  return (
    <div className={styles.categories}>
        <div className={styles.categoriesHeader}>
            <h2>
                Categories
            </h2>
            <Button txtColor = "black" bgColor = "#E7FAFE" text="View All Categories"/>
        </div>
        <div className={styles.cards}>
        <Swiper className="mySwiper"
        slidesPerView={6}
        spaceBetween={40}

        onSlideChange={({activeIndex}) => {
            console.log(categories [activeIndex]);
        }}
        >
            {categories.map(item => (
                <SwiperSlide key={item.id}>
                <div className={styles.card} onClick={() =>{
                    console.log(item.strCategory);
                    props.setCategory(item.strCategory);
                }} >
                    <img src={item.strCategoryThumb} alt="" />
                    <h3>{item.strCategory}</h3>
                </div>
        </SwiperSlide>
            ))}
      </Swiper>
        </div>
    </div>
  )
}

export default Categories