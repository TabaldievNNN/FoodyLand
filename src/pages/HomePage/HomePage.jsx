
import { useState } from 'react'
import Categories from '../../components/Categories/Categories'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import Recipes from '../../components/Recipes/Recipes'
import styles from './HomePage.module.css'

const HomePage = () => {
  const [category,setCategory] = useState("Beef")
  return (
    <div>
        <section className='container'>
            <HomeBanner/>
        </section>
        <section className='container'>
          <Categories setCategory = {setCategory}/>
        </section>
        <section className='container'>
          <Recipes category = {category}/>
        </section>
        <section></section>
        <section></section>
        <section></section>
    </div>
  )
}

export default HomePage