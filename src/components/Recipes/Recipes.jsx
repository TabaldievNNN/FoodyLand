


import styles from './Recipes.module.css'

const Recipes = (props) => {
  return (
    <div>
        <div className={styles.wrap}>
            <h2>
                Simple and tasty recipes {props.category}
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
            </p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src="https://www.themealdb.com/images/media/meals/nlku9e1753690260.jpg" alt="" />
                    <div>
                        <h4>Name</h4>
                        <span><img src="" alt="" /><p>30 minutes</p></span>
                        <span><img src="" alt="" /><p>Fish</p></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recipes