
import Categories from '../../components/Categories/Categories'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div>
        <section className='container'>
            <HomeBanner/>
        </section>
        <section className='container'>
          <Categories/>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </div>
  )
}

export default HomePage