const blogButton = document.querySelector("#post");
const toggleButton = document.querySelector("#toggle-color");

function submitBlog(event) {


    event.preventDefault()
    const userEl = document.querySelector("#username").value.trim()
    const blogTitleEl = document.querySelector("#title").value.trim()
    const content = document.querySelector("#textarea").value.trim()
    if (userEl === "" && blogTitleEl === "" && content === "") {
        
        document.location.reload()
        alert("Please enter information for each field.")
        return null

    } else {
        const blogArray = JSON.parse(localStorage.getItem("blogArray")) || []
        const newBlog = {
            userName: userEl,
            title: blogTitleEl,
            content: content,
        }
        console.log(newBlog)
        blogArray.push(newBlog)
        localStorage.setItem("blogArray", JSON.stringify(blogArray))
        userEl.value = ""
        blogTitleEl.value = ""
        content.value = ""

        window.location.href = "blog.html"
    }

}


toggleButton.addEventListener('click', function (event) {
    event.preventDefault()
    const body = document.body
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"
    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
})

function setTheme(theme) {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}

function getTheme() {
    return localStorage.getItem("theme") || "light"
}

window.onload = () => {
    const savedTheme = getTheme()
    setTheme(savedTheme)
}

blogButton.addEventListener("click", submitBlog)