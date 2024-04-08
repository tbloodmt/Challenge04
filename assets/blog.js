console.log("hello")
const blogContainer=document.querySelector("#blogs")
const blogData=JSON.parse(localStorage.getItem("blogArray")) || []
const toggleButton=document.querySelector("#toggle-color")
let blogCard=""
for(var i=0; i<blogData.length; i++){
blogCard +=`
<div class="blog-card">
<h3> ${blogData[i].title}</h3>
<p>${blogData[i].userName}</p>
<p>${blogData[i].content}</p>
</div>
`
blogContainer.innerHTML=blogCard 
}

toggleButton.addEventListener('click', function(event){
    event.preventDefault()
    const body=document.body
    const currentTheme=body.getAttribute("data-theme")
    const newTheme=currentTheme=== "light"?"dark":"light"
    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    })
    
    function setTheme(theme){
        document.body.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }
    
    function getTheme(){
        return localStorage.getItem("theme") || "light"
    }
    
    window.onload=()=>{
        const savedTheme=getTheme()
        setTheme(savedTheme)
    }