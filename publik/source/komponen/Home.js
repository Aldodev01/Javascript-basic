import app from '../app.js'

const Home = ()=>{
    return`
        
        <main class='Contaier'>

            <div class="bg-text" style="
            
                font-family: 'Dancing Script', cursive;
            
            ">
                <h1>Saya Akhmad Aldo</h1>
                <p>Dan Saya adalah Programer</p>
            </div>

            <section class='Home' style="
                width : 100vw;
                height : 80vh;
                display : flex;
                align-items : center;
                justify-content : space-between;
                padding : 0 10%;
                background-image : url(./source/3.gif);
                background-size : cover;
                background-position : center;
                color : white;
                background-attachment: fixed;

            ">

            <span class="material-icons">
                keyboard_arrow_left
            </span>

            <span class="material-icons">
                keyboard_arrow_right
            </span>
            
            </section>
        
        </main>

      
    
    `


}

// Home.state = {
//     imgNo = 3,

//     imgPrev : ()=>{
//         Home.state.imgNo -= 1
//         app()
//     },

//     imgNext : ()=>{
//         Home.state.imgNo += 1
//         app()
//     }




// }

// window.prev = ()=>{
//     Home.state.imgPrev()
// }

// window.next = ()=>{
//     Home.state.imgNext()
// }

export default Home