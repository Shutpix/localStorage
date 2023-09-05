function svaeToLocalStorage(event)
{
    event.preventDefault();
    const name =  event.target.username.value;
    const email =  event.target.emailid.value;
    const phonenumber = event.target.phonenumber.value;
   // localStorage.setItem('name',name );
  //localStorage.setItem('email',email );
 // localStorage.setItem('phonenumber',phonenumber );

 const obj = {
    name,
    email,
    phonenumber

 }

 localStorage.setItem(obj.JASON.stringify(obj))
 showUserOnScreen(obj);

}

function showUserOnScreen(obj)
{
    const parentElem = document.getElementById('listOfitms')
    const childElem = document.createElement('li')
    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber
    parentElem.appendChild(childElem);
}