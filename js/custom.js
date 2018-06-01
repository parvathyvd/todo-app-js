
var doneSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>checkmark</title><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path></svg>';

var deleteSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>bin</title><path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path><path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path></svg>';


document.getElementById('add').addEventListener('click', function(){

    var item = document.getElementById('item').value;

    if(item){
        addItemTodo(item);
        document.getElementById('item').value = '';

    }

});



function doneItem(){
    var item= this.parentNode.parentNode;
    var parent = item.parentNode;

    var id= parent.id;
    
    var target = (id === 'todo')? document.getElementById('completed') : document.getElementById('todo');

    console.log(target);

    parent.removeChild(item);
    target.insertBefore(item,target.childNodes[0]);


}

function removeItem(){
    
    var item= this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}


function addItemTodo(text){

    var addItem = document.getElementById('todo');

    var listItem = document.createElement('li');

    listItem.innerText = text;

    var buttons = document.createElement('div');

    buttons.classList.add('buttons');


    var done = document.createElement('span');
    done.classList.add('done');
    done.innerHTML = doneSVG;

    done.addEventListener('click', doneItem);


    var remove = document.createElement('span');
    remove.classList.add('delete');
    remove.innerHTML = deleteSVG;

    remove.addEventListener('click', removeItem);

    buttons.appendChild(done);
    buttons.appendChild(remove);

 
    listItem.appendChild(buttons);



    addItem.insertBefore(listItem, addItem.childNodes[0]);

}











