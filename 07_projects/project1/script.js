const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')

btn.forEach(function(ele) {
  
  ele.addEventListener('click', function(i) {
    i.target.id
    if(i.target.id === 'grey') {
      body.style.backgroundColor = i.target.id
    }
    if(i.target.id === 'white') {
      body.style.backgroundColor = i.target.id
    }
    if(i.target.id === 'blue') {
      body.style.backgroundColor = i.target.id
    }
    if(i.target.id === 'yellow') {
      body.style.backgroundColor = i.target.id
    }
    
  })
  
})