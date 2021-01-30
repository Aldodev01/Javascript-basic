import app from './app.js'
import Navbar from './komponen/Navbar.js'
import Menu from './komponen/Menu.js'
import Home from './komponen/Home.js'
import About from './komponen/About.js'
import Contact from './komponen/Contact.js'
import Footer from './komponen/Footer.js'
import Hero from './komponen/Hero.js'


const index = ()=>{
    return `

        ${Navbar()}
        ${Home()}
        ${Menu()}
        
        ${Hero()}
        ${Contact()}
     
        ${Footer()}

    `
}

export default index