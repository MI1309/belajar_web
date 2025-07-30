const bars = document.querySelectorAll('.bar')
bars.forEach(bar=>{
    const teksLama = bar.textContent.trim()
    const nilai = bar.dataset.value
    bar.textContent = `${teksLama} ${nilai || 0}%`
})