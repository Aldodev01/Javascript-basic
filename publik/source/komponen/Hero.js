import app from '../app.js'


const Hero = ()=>{
    return`

    <h1 class='show_video' style="

        width : 100vw;
        height: 7vh;
        flex-direction: column;
        justify-content: center !important;
        align-items : center !important;
        text-align : center;
        font-family: 'Staatliches';
        color: rgb(0, 3, 153);
        font-size : 2rem
        background-color : cyan;
    ">
    PORTOFOLIO SAYA  : 
    </h1>
    <div class="wrapper">
    <div class="row">
        <div class="column">
            <div class="card1">

                <video width="100%" controls>
                <source src="./source/Hanphone.mp4" type="video/mp4">
                </video>

                    <div class="container">

        
                        <h2>Aldodevv</h2>
                        <p class="title">CEO Aldo</p>

                    </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="column">
            <div class="card1">

            <video width="100%" controls>
            <source src="./source/Laptop.mp4" type="video/mp4">
            </video>
            
                <div class="container">

                    <h2>Aldodevv</h2>
                    <p class="title">CEO Aldo</p>

                </div>
            </div>
        </div>
    </div>
    </div>
    `
}

export default Hero