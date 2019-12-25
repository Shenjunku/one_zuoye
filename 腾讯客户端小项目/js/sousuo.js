$(".sou_suo_one>span").click(function () {
    // history.back(-1)
    location.href = 'index.html'
})

var arry = [
    {
        color: "rgba(212, 48, 48, 1)",
        dizi:"",
        leiming:"sou_suo_five_4",
        wenzhi: "扶摇"
    },
    {
        color: "rgba(255, 141, 26, 1)",
        dizi:"",
        leiming:"sou_suo_five_4",
        wenzhi: "甜蜜暴击"
    }, {
        color: "rgba(255, 235, 59, 1)",
        dizi:"",
        leiming:"sou_suo_five_4",
        wenzhi: "小猪佩奇第4季"
    },
    {
        color: "rgba(166, 166, 166, 1)",
        dizi:"",
        leiming:"sou_suo_five_4",
        wenzhi: "猎毒人"
    },
    {
        color: "rgba(166, 166, 166, 1)",
        dizi:"",
        leiming:"sou_suo_five_4",
        wenzhi: "奔跑吧  第2季"
    },
    {
        color: "rgba(166, 166, 166, 1)",
        dizi:"./img/11.svg",
        leiming:"",
        wenzhi: "中国好声音  第7季"
    },
    {
        color: "rgba(166, 166, 166, 1)",
        dizi:"./img/12.svg",
        leiming:"",
        wenzhi: "一千零一夜"
    },
    {
        color: "rgba(166, 166, 166, 1)",
        dizi:"./img/12.svg",
        leiming:"",
        wenzhi: "延禧攻略"
    },
]
var zhi=""
for(var i=0;i<arry.length;i++){
    zhi+=` <div class="sou_suo_five_quan">
    <div class="sou_suo_five_1" style="background-color: `+ arry[i].color+`;">`+(i+1)+`</div>
    <div class="sou_suo_five_2" >
        <span>`+arry[i].wenzhi+`</span>
    </div>
    <div class="sou_suo_five_3">
        <img src=`+arry[i].dizi+` alt="">
        <div class=`+arry[i].leiming+`></div>
    </div>
    </div>
    <div class=sou_xiahua></div>`
}
var sou_suo_five=document.querySelector(".sou_suo_five")
sou_suo_five.innerHTML=zhi
//$(".sou_suo_five").append($(zhi))
