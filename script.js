
ta.onkeydown = function prepareText(e) {

  if (e.which != 13) return

  e.preventDefault()

  document.body.appendChild(transframe)
  transframe.style.display = 'none'

  const words = ta.value.trim().split(/\s+/),
        spans = words.map(word => `<span> ${word} </span>`)

  p.innerHTML = spans.join(' ')

  tokens = [...p.children]
}



tokens = [...p.children]   // remove later



p.onmousemove = p.onmouseleave = p.onmouseenter = function highlight(e) {

  tokens.forEach(child => {
    if (child == e.target)  child.classList.add('underHover')
    else  child.classList.remove('underHover')
  })

}


p.onclick = function select({target}) {

  if (target == transframe || target == translate)  return

  if (target == p) {
    transframe.style.display = 'none'
    p.querySelectorAll('.selected').forEach(span =>
      span.classList.remove('selected') )
  }

  else if ( !target.classList.contains('selected') ) {
    p.querySelectorAll('.selected').forEach(span =>
      span.classList.remove('selected') )
    target.classList.add('selected')
    target.appendChild(transframe)
    transframe.style.display = 'inline'
    transframe.style.transform =
      `translate(-${ target.offsetWidth+50 }px, ${ target.offsetHeight }px)`
    translate.value = ''
  }

}