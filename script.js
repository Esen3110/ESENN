let obj= document.querySelector(".obj")
let curScore = document.querySelector(".curScore")
let numCurStore = 0

obj.addEventListener("click" ,function(){
 numCurStore++
 curScore.innerHTML = "Очки: " + numCurStore
   anime({
     targets: ".obj",
     scale:0.92,
     duration:100
  }).finished.then(()=>{
   anime({
     targets: ".obj",
     scale:1,
     duration:100
   })
 })
})