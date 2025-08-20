


import Button from '../UI/Button/Button'
import styles from './Categories.module.css'
import {useState , useEffect} from 'react'
const URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
const Categories = () => {
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
        <div className={styles.categoriesCards}>
            {categories.map(item => (
                <div key={item.id}>
                    <img src={item.strCategoryThumb} alt="" />
                    <h3>{item.strCategory}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories