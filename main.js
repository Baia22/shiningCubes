let cubic=document.querySelector(".cube")

for (i=0; i<304;i++) {
    let littleCubes=document.createElement("div")
    littleCubes.classList.add("littleCubes")
    cubic.appendChild(littleCubes)
    littleCubes.addEventListener("mouseover", function(){
        let arr=[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]
        randColor="";
        for(i=0;i<6;i++){
        randColor+=arr[Math.floor(Math.random()*16)]
        littleCubes.style.backgroundColor= `#${randColor}`;
        littleCubes.style.transition="all 0s"
    }
    })
    littleCubes.addEventListener("mouseout", function (){
        littleCubes.style.backgroundColor="white"
        littleCubes.style.transition="all 3s";

    })
    
}

