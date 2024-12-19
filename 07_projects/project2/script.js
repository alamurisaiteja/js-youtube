const form = document.querySelector('form')


form.addEventListener('submit',function(e) {
  // wait dont submit fast
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  const wg = document.querySelector('#weight-guide')
  if(height == '' || height < 0 || isNaN(height) ) {
   result.innerHTML = `enter correct height you gave this ${height}
   `
  }else if (weight == '' || weight <0 || isNaN(weight) ) {
    result.innerHTML = `enter correct weight you entered this : ${weight}`
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    result.innerHTML = `your bmi is ${bmi}`
    if(bmi<18.6){
      result.innerHTML=`<span>Under weigth :${bmi}</span>`;
      }else if(bmi>18.6 && bmi<24.9){
          result.textContent=`Normal Weight:${bmi}`;
      }else{
          result.textContent=`Over Weight : ${bmi}`
      }
    
  }

})





