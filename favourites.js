// write js code here corresponding to favourites.html

var favouriteList = JSON.parse(localStorage.getItem("favourites"))

favMatchList (favouriteList)

function favMatchList(data){

    data.forEach (function (elem,index){
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
        td6.innerText="Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deleteFunction(elem,index)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })

}

function deleteFunction(elem,index){
        favouriteList.splice(index,1)
        localStorage.setItem("favourites",JSON.stringify(favouriteList))
        window.location.reload()
}