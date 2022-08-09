const elInput = document.querySelector('.input')
const elButton = document.querySelector('.button')
const elResult = document.querySelector('.result')

elButton.addEventListener('click', function(evt){
  if (elInput.value === '') return;
  createDeleteElement(elInput.value);
  elInput.value = '';
})

function createDeleteElement(value) {
  console.log(value);

  const li = document.createElement('li');
  const btn = document.createElement('button');
  
  li.textContent = value;
  btn.className = 'button';
  li.className = 'li';

  btn.textContent = 'Delete'

  btn.addEventListener('click', function(event){
    elResult.removeChild(li)
  })

  li.addEventListener('click', function(evt){
    li.classList.toggle('li-active')
  })

  li.appendChild(btn)
  elResult.appendChild(li);

}