

var arry=[
    {
        img:"./images/46.jpeg",
        pianming:"制裁特工"
    },
    {
        img:"./images/41.jpeg",
        pianming:"藩篱"
    },
    {
        img:"./images/45.jpeg",
        pianming:"的士速递5"
    },
    {
        img:"./images/42.jpeg",
        pianming:"小偷家族"
    },
    {
        img:"./images/43.jpeg",
        pianming:"碟中谍6"
    },
    {
        img:"./images/44.jpeg",
        pianming:"精灵旅社3"
    }
    
]
var zhi=""
for(var i=0;i<arry.length;i++){
    zhi+=`<div>
    <img src=`+arry[i].img+`> 
    <span>`+arry[i].pianming+`</span>
    </div>`

}
$(".w_jilu").append($(zhi))
$(".w_jilu>div").first().css("margin-left","1rem")
