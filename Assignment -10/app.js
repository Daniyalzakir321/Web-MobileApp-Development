// Name : M.Daniyal Zakir
// Roll No: WM5912
// Email: daniyalzakir03@gmail.com
// Assignment-10: TODO WEB APP

var li=document.getElementById("li")

function add_item(){
var items=document.getElementById("items")
if(items.value=="")
{
Swal.fire("Please enter todo items. <br> Can not add empty list.")
}
else{

// Items
var create_li=document.createElement("li")
var li_Text=document.createTextNode(items.value)
create_li.appendChild(li_Text)

// Edit  Button
var edit_btn=document.createElement("img")
edit_btn.src='Images/edit.png'
edit_btn.alt="EDIT"
edit_btn.setAttribute("onclick","edit_li(this)")
create_li.appendChild(edit_btn)

// Delete  Button
var del_btn=document.createElement("img")
del_btn.src='Images/bin.png'
del_btn.alt="DELETE"
del_btn.className="delclass"
del_btn.setAttribute("onclick","delete_li(this)")
create_li.appendChild(del_btn)

li.appendChild(create_li)

items.value=""
}
}

// Delete All Items with Sweet Alert Library
function del_all_item(){

    Swal.fire({
        title: 'Are you sure?',
        text: "You Want to Delete Whole TODO List!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
         li.innerHTML="";
          Swal.fire(
            'Deleted!',
            'Your TODO List Has Been Deleted.',
            'success'
          )
        }
      })
}

// Delete a Single li
function delete_li(rm){
rm.parentNode.remove()
sweetAlertSuccessMsg("Deleted Successfully")
}

// Edit  Value
function edit_li(e){ 
var val= e.parentNode.firstChild.nodeValue
edit_Val= prompt("Enter Edit Value", val)
e.parentNode.firstChild.nodeValue= edit_Val
console.log( e.parentNode)
sweetAlertSuccessMsg("Edit Successfully") 
}

// Sweet Alert Library
function sweetAlertSuccessMsg(msg){
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: msg
  })  
}
