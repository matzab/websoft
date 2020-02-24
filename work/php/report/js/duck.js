(function(){

    var pepe = document.getElementById("pepe")
    var offsetWidth = pepe.offsetWidth
    var offsetHeight = pepe.offsetHeight
    var w = window.innerWidth;
    var h = window.innerHeight;
    var hidden = false;

    setInterval(function(){
        
        pepe.style.visibility = hidden ? 'visible' : 'hidden'
        hidden = !hidden

        var newX = Math.floor(Math.random() * (w))
        var newY = Math.floor(Math.random() * (h))


        if(newX >= (w-offsetWidth)){
            pepe.style.left = newX-pepe.offsetWidth + "px"
        } else {
            pepe.style.left = newX + "px"
        }
       
        if(newY >= (h-offsetHeight)){
            pepe.style.top  = newY-pepe.offsetHeight+ "px"
        }else{
            pepe.style.top  = newY+ "px"
        }
    },750)

    pepe.addEventListener("click", function(){
        
    
    })

    window.addEventListener("resize", function(){
         w = window.innerWidth;
         h = window.innerHeight;
    })

    console.log(pepe.style.width)
    console.log(pepe)
    console.log("Duck ready")
})();