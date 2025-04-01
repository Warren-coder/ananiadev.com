let answercaption = "Correct "
let falsecaption = "Incorrect"
let quez = document.getElementById("qz");
let True = document.getElementById("true")
let False = document.getElementById("false")
let sub = document.getElementById("btn").addEventListener("click" , function(){
    let ans = document.getElementById("answer")

    if(True.checked ){ 
         ans.innerHTML = `${answercaption}✔ `
         ans.style.backgroundColor = "white"
         ans.style.color = "green"
         ans.style.paddingTop = "5px"
         ans.style.paddingBottom = "5px"
         ans.style.fontSize= "20px"
         let netqu = document.getElementById("sub2")
         if(netqu.style.display === "none"){
            netqu.style.display = "block"
         }
         else(netqu.style.display = 'block')
    }
    else if(False.checked){
         ans.style.backgroundColor = "white"
         ans.style.color = "grey"
         ans.style.paddingTop = "5px"
         ans.style.paddingBottom = "5px"
         ans.style.fontSize= "20px"
          ans.innerHTML = `${falsecaption} `
    }
    else{
        ans.innerHTML = "choose true or false!"
        ans.style.color = "red"
        ans.style.backgroundColor = "white"
        ans.style.paddingTop = "5px"
         ans.style.paddingBottom = "5px"
         ans.style.fontSize= "20px"
          ans.innerHTML = "choose true or false"
    }
   


})