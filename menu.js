// alert('si estoy')


function toogleMenu() {
    // console.log('its working')
    let menu = document.getElementById('menuEscondido')
    if (menu.style.left === "-210px") {
        menu.style.left = "0"
    }
    else {
        menu.style.left = "-210px"

    }
}

function searchForm() {
    let search = document.getElementById('search')
    if (search.style.top === "-67px") {
        search.style.top = "67px"
    }
    else{
        search.style.top = "-67px"
    }
}

function adviceOut() {
    let advice = document.getElementById('advice')
        if (advice.style.display === "flex") {
            advice.classList.remove("advice__entry")
            advice.classList.add("advice__out")
        }
        else {
            advice.classList.add("advice__out")
        }
    }