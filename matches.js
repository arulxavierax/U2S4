// write js code here corresponding to matches.html

var matchList=JSON.parse(localStorage.getItem("schedule"))
favoriteArr=JSON.parse(localStorage.getItem("favourites")) || []
dataMatchList (matchList)


    function filterVenue(){
        var selected=document.getElementById("filterVenue").value
        var filteredList=matchList.filter(function (elem){
            return elem.venue==selected
        })
        dataMatchList(filteredList)
       

    }
function dataMatchList(data){


    data.forEach (function (elem){
        tr=document.createElement("tr")

        td1=document.createElement("td")
        td1.innerText=elem.matchNumber
        td2=document.createElement("td")
        td2.innerText=elem.teamA
        td3=document.createElement("td")
        td3.innerText=elem.teamB
        td4=document.createElement("td")
        td4.innerText=elem.dateofMatch
        td5=document.createElement("td")
        td5.innerText=elem.venue
        td6=document.createElement("td")
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favoriteFunction(elem)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)

    })
    
}


function favoriteFunction(elem){
    favoriteArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favoriteArr))

}