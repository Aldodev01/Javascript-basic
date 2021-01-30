import app from '../app.js'

const Navbar = ()=>{
    return`

    <nav class='Navbar' style="
        width : 100vw;
        height : 10vh;
        display : flex;
        justify-content : space-between;
        align-items : center;
        padding : 0 10%;
        background-color : black;
        color : white;
    ">
        
        <h1 class='brand'"> A L D O </h1>


        <audio controls autoplay loop id="indexAudio" style="
            display : none;

    
        ">
            <source src="./Vicetone ft. Kat Nestel - Nothing Stopping Me (Lyric Video) [Premiere].mp3">
        </audio>
        
    </nav>
`
}

export default Navbar