const containerEl = document.getElementById("wrapper")


const generateColor = ()=>{
    boxEls.forEach((boxEl)=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16) 
        boxEl.style.backgroundColor = "#"+randomColor
        boxEl.innerText = "#"+randomColor
    })
}

for (let index = 0; index < 20; index++) {

   const boxEl =  document.createElement("div")
   boxEl.classList.add("box")
   containerEl.appendChild(boxEl)
}

const boxEls = document.querySelectorAll(".box")

generateColor()