function changePage (link) {
    event.preventDefault()
    document.querySelectorAll('.page').forEach(el => {
        el.classList.add('d-none')
    })
    document.getElementById(link).classList.remove('d-none')
}
