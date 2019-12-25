var arry = [{
    img: "img/9.jpeg",
    juming: "沙海",
    biaoti: "更新至10集/全54集"
}, {
    img: "img/9.jpeg",
    juming: "沙海",
    biaoti: "更新至优享版第8期：赛道分组密室讨论全程"
}, {
    img: "img/9.jpeg",
    juming: "沙海",
    biaoti: "更新至10集/全54集"
},
{
    img: "img/9.jpeg",
    juming: "沙海",
    biaoti: "更新至优享版第8期：赛道分组密室讨论全程"
},
{
    img: "img/9.jpeg",
    juming: "沙海",
    biaoti: "更新至10集/全54集"
},
{
    img: "img/9.jpeg",
    juming: "沙海",
    biaoti: "更新至优享版第8期：赛道分组密室讨论全程"
}]

var zhi=""
for(var i=0;i<arry.length;i++){
    zhi+=`<div class="j_duo">
    <div class="j_duo_one">
        <img src=`+arry[i].img+`>
        <div>独播</div>
    </div>
    <div class="j_duo_two">
        <div>`+arry[i].juming+`</div>
        <span>`+arry[i].biaoti+`</span>
    </div>
</div>`
}

var jilu=document.querySelector(".jilu")
jilu.innerHTML=zhi
var dianji=document.querySelector(".t_one>img")

dianji.onclick=function(){
    //location.href='index.html'
    history.back(-1)
}