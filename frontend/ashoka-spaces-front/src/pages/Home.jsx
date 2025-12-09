import Header from '../components/Header/Header'
import Middle from '../components/Middle/Middle'
import Testimonials from '../components/Middle/Testimonials'
import Agents from '../components/Middle/Agents'
import Blog from '../components/Middle/Blog'
function Home(){
    return(
        <>
           <Header/>
    <Middle/>
    <Testimonials/>
    <Agents/>
    <Blog/>
        </>
    )
}

export default Home