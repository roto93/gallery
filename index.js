const nav = document.querySelector('nav')
nav.onclick = (evt) => {
    if (evt.target.tagName.toLowerCase() === 'li') {
        nav.querySelector('.active').classList.remove('active')
        evt.target.classList.add('active')
        console.log(evt.target)
    }
}

const aside = document.querySelector('aside')
const gridItems = document.querySelectorAll('.items')
aside.onclick = (evt) => {
    if (evt.target.tagName.toLowerCase() === 'li') {
        aside.querySelector('.active').classList.remove('active')
        evt.target.classList.add('active')
        let filterName = evt.target.innerHTML.toLowerCase()
        gridItems.forEach(item => {
            let itemType = item.getAttribute('item-type')
            if (itemType === filterName | filterName === 'all') {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    }
}