let spans = document.querySelectorAll('span')
let [first, second, third, fourth, fifth, sixth] = spans
let categoryBtns = Array.from(document.querySelectorAll('button')).slice(0, 5)
categoryBtns.forEach(x => x.addEventListener('click', show)) 
function show(e){
  let i = categoryBtns.indexOf(e.target)
  if(i !== -1){
    document.querySelector('.tableDiv').style.display = 'block'
  }
  sixth.textContent = 'Stay tuned for more!'
  if(i === 0){
   third.textContent = 'Konstantin Velichkov, Mladost - 2 major areas'
   fourth.textContent = 'Zona B 5 - 1 major area'
   fifth.textContent = 'Studentski Grad, Faculteta - the whole area'
  }
  if(i === 1){
   third.textContent = 'Macedonia square- 1 major area'
   fourth.textContent = 'Luvov most - 1 major area'
   fifth.textContent = 'Pliska Hotel - 1 major area'
  }
  if(i === 2){
   third.textContent = 'See where famous criminals were killed'
   fourth.textContent = 'See where there were shootings or other events'
   fifth.textContent = ''
  }
  if(i === 3){
   third.textContent = 'Check what\'s going on recenlty'
   fourth.textContent = 'Meet people of interest'
   fifth.textContent = ''
  }
  if(i === 4){
   third.textContent = 'Anything you want to know or see - just ask the guide'
   fourth.textContent = ''
   fifth.textContent = ''
  }
}
let btn = document.querySelector('.closeBtn')
btn.addEventListener('click', () => {
document.querySelector('.tableDiv').style.display = 'none'
})