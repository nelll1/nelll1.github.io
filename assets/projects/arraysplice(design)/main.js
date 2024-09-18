const submitBtn = document.getElementById('submit')
let array =[]
submitBtn.addEventListener('click', function(){
   spliceFunction()
   unshift()
   pushFunction()
})

function spliceFunction(){
    const fromValue = parseInt(document.getElementById('from').value);
    const deleteValue = parseInt(document.getElementById('delete').value);
    const grid = document.querySelector('.array-container');
    const gridItems = Array.from(grid.querySelectorAll('.text'));
    // let add1Value = document.getElementById('add1').value;
    // let add2Value = document.getElementById('add2').value;
    // let add1 = document.createElement('div')
    // let add2 = document.createElement('div')
    // add1.className = 'text'
    // add1.setAttribute('data-aos', 'fade-left')
    // add2.className = 'text'
    // add2.setAttribute('data-aos', 'fade-left')




    if (fromValue >= 0 && fromValue < gridItems.length) {
        const deletedItems = gridItems.splice(fromValue, deleteValue);
        deletedItems.forEach(item => {
            item.remove();
        });
        
    } else {
       
    }
}



function pushFunction(){
    const gridItems = document.querySelectorAll('.text')
    const lastGridItem = gridItems[gridItems.length -1]
    let pushValue = document.getElementById('push').value
    let push= document.createElement('div')
    push.className = 'text';
    push.textContent = pushValue
    push.setAttribute('data-aos', 'fade-left')
    if(pushValue !== ""){
        lastGridItem.insertAdjacentElement('afterend', push)
        document.getElementById('push').value = ''

    }else{
        //nothing to set
    }
    array.push(push)
}

function unshift(){
    const gridItems = document.querySelectorAll('.text')
    const firstItem = gridItems[0];

    let unshiftValue = document.getElementById('unshift').value
    let unshift= document.createElement('div')
    unshift.className = 'text';
    unshift.textContent = unshiftValue
    unshift.setAttribute('data-aos', 'fade-right')
    if(unshiftValue !== ""){
        firstItem.insertAdjacentElement('beforebegin', unshift)
        document.getElementById('unshift').value = ''

    }else{
        //nothing to set
    }
}

document.getElementById('pop').addEventListener('click', function(){
    const gridItems = document.querySelectorAll('.text')
    const lastGridItem = gridItems[gridItems.length -1]
    lastGridItem.remove()
    
})
document.getElementById('shift').addEventListener('click', function(){
    const gridItems = document.querySelectorAll('.text')
    const firstGridItem = gridItems[0]
    firstGridItem.remove()
})



