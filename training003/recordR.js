var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    list.innerHTML = list.innerHTML+`
        <div class="article">
            <h2>${title.value}</h2>
            <p2>${content.value}</p2>
        </div>
        `;
        title.value="";
        content.value="";
})
