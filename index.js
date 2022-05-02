// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",MPLFunction)

var mplArr=JSON.parse(localStorage.getItem("schedule")) || []

function MPLFunction(){
    event.preventDefault();

    mplObj={
        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        dateofMatch:masaiForm.date.value,
        venue:masaiForm.venue.value
    }

    mplArr.push(mplObj)
    localStorage.setItem("schedule",JSON.stringify(mplArr))
    window.location.href="matches.html"
}