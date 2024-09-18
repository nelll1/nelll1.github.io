

$('.add-balanced-container').hide() //default hiding container
$('.add-expenses-container').hide()
let moneyBalance = 0; //money balance
console.log(moneyBalance)

// hiding container
function hidingAddContainer(){
  $('.add-balanced-container').hide()
  $('.add-expenses-container').hide()
  $('.expense-container').show()
  document.getElementById('money-input').value = ''
  document.getElementById('description').value = ''
}


//adding balance
function addedBalanceDetails(){
  const description = document.getElementById('description').value;
  const moneyValue =  document.getElementById('money-input').value //getting value of money input

  if(moneyValue === ''){
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Please add a value',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }else{

  moneyBalance += parseFloat(moneyValue); //adding the moneyValue to moneyBalance
  $('#balance').text(moneyBalance)

  let addedHistory = `   
  <div class="added-expense-history">
      <p class="added-balanced">+ ${moneyValue}</p>
      <div class="details">
          <p class="from">${description}</p>
          <span class="time">A few moments ago</span>
      </div>

      <!--delete btn-->
      <button class="delete-button" id="delete-btn">
          <svg class="delete-svgIcon" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>
  </div> `

  $('.expense').prepend(addedHistory)
  hidingAddContainer() //hiding container

  console.log(moneyBalance)

  $('.delete-button').on('click', function(){
    const parent =  this.parentNode;
    $(parent).fadeOut(1000, function(){
      this.remove()
    })
    
    console.log($(parent))
  })
}
  
}

//minus balance
function addExpenseDetails(){
  const description = document.getElementById('expense-description').value;
  const moneyValue =  document.getElementById('expense-input').value //getting value of money input

  if(moneyValue > moneyBalance){
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Your expenses exceed your current balance, preventing further processing.',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  } else if(moneyValue === ''){
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Please add a value',
      footer: '<a href="">Why do I have this issue?</a>'
    })
}else{

  
    moneyBalance -= parseFloat(moneyValue); //adding the moneyValue to moneyBalance
    $('#balance').text(moneyBalance)
    
    let addedHistory = `   
    <div class="added-expense-history">
        <p class="added-balanced" style="color: red;">- ${moneyValue}</p>
        <div class="details">
            <p class="from">${description}</p>
            <span class="time">A few moments ago</span>
        </div>
  
        <!--delete btn-->
        <button class="delete-button" id="delete-btn">
            <svg class="delete-svgIcon" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
    </div> `
  
    $('.expense').prepend(addedHistory)
    hidingAddContainer() //hiding container
    
  
    console.log(moneyBalance)
  
    $('.delete-button').on('click', function(){
      const parent =  this.parentNode;
      $(parent).fadeOut(1000, function(){
        this.remove()
      })
      
      console.log($(parent))
    })
  }
  
}





//submit button
$('#submit-balance').on('click', addedBalanceDetails)
$('#submit-expense').on('click', addExpenseDetails)


$('.cancel-button').on('click', hidingAddContainer)

//directing to add container
$('#add-balance').on('click', function(){
  $('.add-balanced-container').show()
  $('.expense-container').hide()
})

$('#add-expense').on('click', function(){
  $('.add-expenses-container').show()
  $('.expense-container').hide()
})

$('#reset').on('click', function(){
  window.location.reload()
})



