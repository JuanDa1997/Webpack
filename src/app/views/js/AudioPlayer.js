export class AudioPlayer{

    constructor(domElement){
        this.domElement = domElement;
        this.canciones = ["./assets/songs/songOne.mp3","./assets/songs/songTwo.mp3","./assets/songs/songThree.mp3","./assets/songs/songFourth.mp3"];
        this.src = this.canciones;
        this.contador = 0;
        // this.audio = new Audio(this.src);
        this.audio = new Audio(this.src[0]);
        this.controls = {
            domElement: this.domElement.querySelector(".controls")
        };
        console.log(this.src)
        this.progress = this.domElement.querySelector(".video .progress");
        this.initControls();
        // this.initProgressActions();
        this.audio.ontimeupdate = () => {this.updateUI(); }
    }

    initControls(){
        
        this.controls.play = this.controls.domElement.querySelector(".circulos .play")
        this.controls.pause = this.controls.domElement.querySelector(".circulos .pause")
        this.controls.skip = this.controls.domElement.querySelector(".flechas .derecha")
        this.controls.leftSkip = this.controls.domElement.querySelector(".flechas .izquierda")

        

        if (this.controls.play) {
            this.initPlay(this.controls.play);
        }

        if (this.controls.pause) {
            this.initPlay(this.controls.pause);
        }

        if (this.controls.skip) {
            this.initPlay(this.controls.skip)
        }

        if (this.controls.leftSkip) {
            this.initPlay(this.controls.leftSkip)
        }
    }

   
    initPlay(domElement){
        console.log("entro")
        domElement.onclick = () => {
            const icon = domElement.querySelector("i");
            console.log(icon);
            const isPlay = icon.classList.contains("play");
            const isPause = icon.classList.contains("pause");
            const isSkip = icon.classList.contains("derecha")
            const isLeftSkip = icon.classList.contains("izquierda")

            
            if(isPlay){
                this.play();              
            }
            if(isPause){
                this.pause();              
            }
            if(isSkip){
                this.skip();  
                ++this.contador  
                console.log(this.contador) 
                this.skip(this.contador)          
            }

            if(isLeftSkip){
                this.skip()  
                --this.contador  
                console.log(this.contador) 
                this.skip(this.contador)          
            }
           
        }
    }

    // initProgressActions(){
    //     const cover = this.domElement.querySelector(".video")
    //     cover.onclick = (e) => {
    //         const x = e.offsetX;
    //         const totalX = cover.clientWidth;
    //         const progress = x/totalX;
    //         this.setCurrentTime(progress)
    //     };
    // }

    setCurrentTime(progress){
        this.audio.currentTime = this.audio.duration * progress;
    }


    updateUI(){
        const total = this.audio.duration;
        const current = this.audio.currentTime;
        const progress = (current / total) * 100;
        this.progress.style.width = `${progress}%`;
    }

    play(){
        
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));

    }

    pause(){
        this.audio.pause();
    }

    skip(contador){
            
        if (contador == 0) {
            if(!contador){
                this.pause()
            }
            const x = document.getElementsByClassName("video")[0];
            x.style.backgroundImage = "";
            this.play(this.audio = new Audio(this.src[0]));

        }else if (contador == 1) {
            if(contador){
                this.pause()
            }
            const x = document.getElementsByClassName("video")[0];
            x.style.backgroundImage = "url(./assets/covers/gif4.gif)";
           this.play(this.audio = new Audio(this.src[1]));

        }else if(contador == 2){
            if(contador){
                this.pause()
            }
            const x = document.getElementsByClassName("video")[0];
            x.style.backgroundImage = "url(./assets/covers/gif2.gif)";
            this.play(this.audio = new Audio(this.src[2]));
        }else if(contador == 3){
            if(contador){
                this.pause()
            }
            const x = document.getElementsByClassName("video")[0];
            x.style.backgroundImage = "url(./assets/covers/gif3.gif)";
            this.play(this.audio = new Audio(this.src[3]));
        }else if(contador > 3){
            alert("no hay más canciones en la cola")
            
        }

    }

  

}
