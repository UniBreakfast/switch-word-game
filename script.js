
ta.onkeydown = function prepareText(e) {

  if (e.which != 13) return

  e.preventDefault()

  const words = ta.value.trim().split(/\s+/),
        spans = words.map(word => `<span> ${word} </span>`)

  p.innerHTML = spans.join(' ')

}


p.onmousemove = function highlight(e) {

}