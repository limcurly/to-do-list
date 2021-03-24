let container = document.getElementById('container');
let unOrderedList = document.getElementById('ul');
let userInput = '';
let id = 0;

let listItemIndex = [];

function getUserInput() {
    console.log(userInput)
}

// button that activates make list item function
document.getElementById('make-new-btn').addEventListener('click', () => {
    
    let newListItem = document.createElement('li');

    //for css styling
    newListItem.className = 'listItem';

    newListItem.textContent = document.getElementById('inputArea').value;
    
    document.getElementById('ul').appendChild(newListItem)

    id++;

    console.log(newListItem.id)

    // delete node button
    let delBtn = document.createElement('button');
    delBtn.className = 'delBtn';
    delBtn.textContent = '❌';
    delBtn.id = "delBtn";
    newListItem.appendChild(delBtn);

    // deletes all nodes atm
    document.getElementById('delBtn').addEventListener('click', () => {
        document.getElementById('ul').removeChild(newListItem);
        
    })
});



