let times = document.querySelectorAll(".time ul li");
let titles = document.querySelectorAll(".card .content .title")
let amountOfTimes = document.querySelectorAll(".amount-of-time span");
let LastWeekTimes = document.querySelectorAll(".last-week-time span");
// ******
window.addEventListener("load", _ => {
    times.forEach(time => {
        if (time.textContent === localStorage.time) {
            times.forEach(time => time.classList.remove("active"))
            time.classList.add("active")
        }
    })
})
// ******
function changeData(data) {
    data.forEach((d, i) => {
        amountOfTimes[i].textContent = d.timeframes[localStorage.time || "weekly"].current
        LastWeekTimes[i].textContent = d.timeframes[localStorage.time || "weekly"].previous
    })
}
// ******
fetch("data.json")
.then(response => response.json())
.then(data => {
    changeData(data)
    times.forEach(time => {
        time.addEventListener("click", _ => {
            times.forEach(time => time.classList.remove("active"))
            time.classList.add("active")
            localStorage.time = time.textContent
            changeData(data)
        })
    })
})