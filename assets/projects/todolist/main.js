const addButton = document.querySelector(".add")
const inputclear = document.getElementById('input-box')

function addTask(){
    const ulContainer = document.querySelector('ul')
    const createList = document.createElement('li')
    const inputValue = document.getElementById('input-box').value;
    const task = createList.textContent = inputValue;
    
    
    const taskList = ` <li class"item-list"><label class="container">
    <input type="checkbox" id="check-box">
    <svg viewBox="0 0 64 64" height="1em" width="1em">
    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
    </svg>
  </label>
  ${task}
   <button class="delete-button" id="delete-btn">
    <svg class="delete-svgIcon" viewBox="0 0 448 512">
    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
    </svg>
  </button>
</li>
`
ulContainer.insertAdjacentHTML("beforeend", taskList);




const deleteBtn = document.querySelectorAll(".delete-button").length;
for(let i = 0; i < deleteBtn; i++){
    document.querySelectorAll('.delete-button')[i].addEventListener('click', function(){
      this.parentNode.remove()
    })
}

const checkbox = document.querySelectorAll("#check-box").length;
for(let i = 0; i < checkbox; i++){
    document.querySelectorAll('#check-box')[i].addEventListener('click', function(){
        const secondParent = this.parentNode;
        const firstParent = secondParent.parentNode;
        document.querySelector('.completed').appendChild(firstParent)
        document.getElementById('check-box').disabled = true
      
    })
}

  
}

addButton.addEventListener('click', function(){
  addTask()
  inputclear.value = '';
})