function handleMouseEnter() {
    let div = document.getElementById('custom-div')
    div.classList.remove('bg-info')
    div.classList.add('bg-warning')
}

function handleMouseLeave() {
    let div = document.getElementById('custom-div')
    div.classList.add('bg-info')
    div.classList.remove('bg-warning')
}


function handleMouseEvent(flag , item) {
    console.log(element)
    // let div = document.getElementById('custom-div')
    if (flag == 'mouseEnter') {
        item.classList.remove('bg-info')
        item.classList.add('bg-warning')
    }
    else {
        item.classList.add('bg-info')
        item.classList.remove('bg-warning')
    }
}