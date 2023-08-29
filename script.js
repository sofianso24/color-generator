const containerEl = document.getElementById("wrapper")

const randomColor = Math.floor(Math.random()*16777215).toString(16) 

for (let index = 0; index < 20; index++) {

   const boxEl =  document.createElement("div")
   boxEl.classList.add("box")
   containerEl.appendChild(boxEl)
}

