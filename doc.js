function svaeToLocalStorage(event)
{
    event.preventDefault();
    const name =  event.target.username.value;
    const email =  event.target.emailId.value;
    const phonenumber = event.target.phoneNumber.value;
    localStorage.setItem('name',name );
    localStorage.setItem('email',email );
    localStorage.setItem('phonenumber',phonenumber );




}