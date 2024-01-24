//access all the html elements
let form = document.getElementById('form');
let input = document.getElementById('input');
let msg =  document.getElementById('msg');
let comments =  document.getElementById('comments');


form.addEventListener('submit',(e)=>{
//prevents default behaviour of the form 
e.preventDefault();

//validate the empty box
formValidation()
})


//create validation method
let formValidation =()=>{
	if(input.value  === ''){
  
  msg.innerHTML = 'Comment box cannot be empty'
  }
  
  else{
  
  msg.innerHTML = ''
  writeComment()
  }
}

//store all the comment in data variable.
let data = {}

let writeComment = ()=>{
		data['comment'] = input.value;
    
    //call create comment method
    createComment()
}


//create comment
let createComment = () =>{
  if(comments.innerText=='No Comments..'){
    comments.innerHTML='';
  }
  
	comments.innerHTML += `<div class='comment'>
	<span class='data'>${data.comment}</span>
  <span class="options">
        <ion-icon name="create-outline" onclick='editComment(this)'></ion-icon>
        <ion-icon name="trash-outline" onclick='deleteComment(this)'></ion-icon>
      </span>
  </div>
  `
  input.value = ''
}

// delete comment

let deleteComment = (e)=>{
//remove parent node 
	e.parentElement.parentElement.remove();
}

//edit comment

let editComment =(e)=>{
//read the previous added comment to updat/edit
input.value = e.parentElement.previousElementSibling.innerHTML;

	e.parentElement.parentElement.remove()
}