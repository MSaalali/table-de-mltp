let input = document.getElementById("num"); 
let numSelect = document.getElementById("select");
let result = document.getElementById("result");
let history = document.getElementById("history"); 
let showBtn = document.getElementById("btn"); 

let obj={}
if (localStorage.length>0) {
    let localStorageData = JSON.parse(localStorage.getItem("data"))
    obj={...localStorageData}

for (let n in obj) {
 history.innerHTML+=`<br>${n} =${obj[n]} `
}
}
showBtn.addEventListener("click", () => {
    if (input.value !== "" && numSelect.value !== "") {
        let r = +input.value * +numSelect.value
        result.innerHTML = r
        obj[`${input.value} * ${numSelect.value}`]=r
        localStorage.setItem("data", JSON.stringify(obj))
       history.innerHTML+=`<br>${input.value} * ${numSelect.value}= ${r}`
    } else {
        alert("dkhel chi nmra tmma")
    }
})


