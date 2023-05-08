let Name = document.getElementById('name')
let Email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')
let addbtn = document.getElementById('addbtn')
let blogComments = document.getElementById('blogComments')
let comNum = 0;
let updateBtn=document.getElementById('update')
updateBtn.style.display='none'
let currentIndex=''
let comments
let isnamevalid
 let isSubjectvalid 
 let ismessagevalid

if(JSON.parse(localStorage.getItem('comments'))==null){
    comments=[]
}else{
    comments=JSON.parse(localStorage.getItem('comments'))

}
displaycomments()
checkinputs()
function checkinputs(){
    if(isnamevalid && isSubjectvalid && ismessagevalid){
        addbtn.removeAttribute('disabled')
    }
    else{
        addbtn.setAttribute('disabled','disabled')
    }
}


addbtn.onclick = function (e) {
    e.preventDefault()
    addcomment()
    resetinput()
    displaycomments()

    console.log(comments)
}
/*creat comment*/
function addcomment() {
    let comment = {
        userName: Name.value,
        userEmail: Email.value,
        commentSub: subject.value,
        commentMsg: message.value,
    }
    comments.push(comment)
    localStorage.setItem('comments', JSON.stringify(comments))
    comNum++
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thanks for your comment',
        showConfirmButton: false,
        timer: 1500
      })

}

function resetinput() {
    Name.value = ''
    Email.value = ''
    subject.value = ''
    message.value = ''
}
/* read or dispaly data*/
function displaycomments() {
    let data = ` <h3 class="text-dark mb-4">${comNum} Comments</h3>`
    for (let i = 0; i < comments.length; i++) { 
        data += `
       <div class="d-flex justift-content-center align-items-center ">
       <img  src="aseets/images/cmt-img2.jpg" class=" img rounded-circle w-40" />
       <div class="commentInfo ms-4">
       <h6 class="mb-0">${comments[i].userName} </h6>
       <p>${comments[i].userEmail}</p>
       <span class="mb-2">${comments[i].commentSub}</span>
       <p>${comments[i].commentMsg}</p>
       </div>
       </div>

       <div class="btn-box mt-4 text-center">
        <div class="row ">
        <div class="col-lg-6 col-md-6 col-sm-6">
       <button class="custome-btn border border-light text-white " onclick=deleteComment(${i})> delete</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
       <button class="custome-btn border border-light text-white" onclick=getComment(${i})> update</button>
        </div> 
        </div>
        </div>
       
        `
    
    }
    blogComments.innerHTML = data
}
        
        
    

    


/*delete comment*/
function deleteComment(index){ 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            comments.splice(index, 1)
            localStorage.setItem('comments', JSON.stringify(comments))
             if( comNum>0){comNum--}
            displaycomments()
            console.log(comments)
            Swal.fire(
                'Deleted!',
                'Your comment has been deleted.',
                'success'
            )

        }
    })

}

   
/*update comment*/
function getComment(index){
currentIndex=index
let comment= comments[index]
Name.value= comment.userName
Email.value= comment.userEmail
subject.value= comment.commentSub
message.value=comment.commentMsg
updateBtn.style.display='inline'
addbtn.style.display='none'
}
updateBtn.onclick=function(e){
    e.preventDefault()
    updateComment()
    displaycomments()
    updateBtn.style.display='none'
    addbtn.style.display='inline'
    resetinput()
    
}
function updateComment(){
    let comment = {
        userName: Name.value,
        userEmail: Email.value,
        commentSub: subject.value,
        commentMsg: message.value,
    }

    comments[currentIndex].userName=comment.userName
    comments[currentIndex].userEmail=comment.userEmail
    comments[currentIndex].commentSub=comment.commentSub
    comments[currentIndex].commentMsg=comment.commentMsg
    localStorage.setItem('comments', JSON.stringify(comments))
    displaycomments()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: ` your comment updated successfully`,
        showConfirmButton: false,
        timer: 1500
      })


}
/*validation*/
/*name: start with capital,3-10,no numbers*/
var nameAlert=document.getElementById("nameAlert");
Name.onkeyup=function(){
    var pattern=/^[A-Z][ A-Za-z/s]{3,20}$/
    if(pattern.test(Name.value)){
        isnamevalid=true;
        if(Name.classList.contains('is-invalid')){
          Name.classList.replace('is-invalid','is-valid')  
        }
        Name.classList.add('is-valid');
        nameAlert.innerHTML='';   
    }
    else{
         isnamevalid=false;
         nameAlert.innerHTML='please start with capital and numder of letters must be from 4 to 10'
        if(Name.classList.contains('is-valid')){
          Name.classList.replace('is-valid','is-invalid')  
        }
        Name.classList.add('is-invalid')
       
    }
    checkinputs()
}
/*subject: use letters and numbers from 5 to 50 digits*/
var subjectAlert=document.getElementById("subjectAlert");
subject.onkeyup=function(){
    var pattern=/^[A-Z][A-Za-z0-9\s]{5,50}$/
    if(pattern.test(subject.value)){
        isSubjectvalid=true;
        if(subject.classList.contains('is-invalid')){
            subject.classList.replace('is-invalid','is-valid')  
        }
        subject.classList.add('is-valid')
        subjectAlert.innerHTML='';  
        
    }
    else{
         isSubjectvalid=false;
         subjectAlert.innerHTML='Please start with capital and write more than 5 letters'; 
        if(subject.classList.contains('is-valid')){
          subject.classList.replace('is-valid','is-invalid')  
        }
        subject.classList.add('is-invalid')
       
    }
    checkinputs()

}
/*message: use letters and numbers more than 20 digit*/
var messageAlert=document.getElementById("messageAlert");
message.onkeyup=function(){
    var pattern=/^[A-Z][A-Za-z0-9\s]{1,20}$/
    if(pattern.test(message.value)){
        ismessagevalid=true;
        if(message.classList.contains('is-invalid')){
            message.classList.replace('is-invalid','is-valid')  
        }
        message.classList.add('is-valid')
        messageAlert.innerHTML='';  
        
    }
    else{
         ismessagevalid=false;
         messageAlert.innerHTML='Please start with capital and write more than 20 digits'; 
        if(message.classList.contains('is-valid')){
          message.classList.replace('is-valid','is-invalid')  
        }
        message.classList.add('is-invalid')
       
    }
    checkinputs()

}












 










