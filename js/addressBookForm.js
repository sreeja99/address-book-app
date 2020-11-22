let contactObj = new Contact();
let isUpdate = false;
window.addEventListener("DOMContentLoaded",(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector(".text-error");   
    let nameRegex = RegExp("^([A-Z]{1}[A-Za-z]{2,}[ ]?){1,}$");      
    validateEntry(name,nameRegex,textError);

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector(".phone-error");
    let phoneRegex = RegExp("^[+]?([0-9]{2})?[1-9]{1}[0-9]{9}$");
    validateEntry(phone,phoneRegex,phoneError);

    const address = document.querySelector('#address');
    const addressError = document.querySelector(".address-error");
    let addressRegex = RegExp("^([A-Za-z0-9/,-]{3,}[ ]?)+$");
    validateEntry(address,addressRegex,addressError);

    function validateEntry(entry,regex,errorField){
        entry.addEventListener('input',function(){
            if(regex.test(entry.value)||entry.value.length==0)
                errorField.textContent="";
            else 
                errorField.textContent="Invalid entry";
        });
    }
    checkForUpdate();
});
const save = ()=>{
    try{
        setContactObject();
        createAndUpdateStorage();
    }catch(e){
        return;
    }
    alert(contactObj.toString());
    resetForm();
}
const resetForm = ()=>{
    document.querySelector("#name").value = "";
    document.querySelector('#phone').value = "";
    document.querySelector('#address').value= "";
    document.querySelector('#city').value = "";
    document.querySelector('#state').value= "";
    document.querySelector('#zip').value= "";
}
const setContactObject = ()=>{
    try{
        contactObj._id = new Date().getTime();
        contactObj._name = document.querySelector('#name').value;
        contactObj._phone = document.querySelector('#phone').value;
        contactObj._address = document.querySelector('#address').value;
        contactObj._city = document.querySelector('#city').value;
        contactObj._state = document.querySelector('#state').value;
        contactObj._zip = document.querySelector('#zip').value;
    }catch(e){
        alert("Please enter valid details!");
    }
}
const createAndUpdateStorage = ()=>{
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if(contactList){
        let contactData = contactList.find(contact=>contact._id ==contactObj._id);
        if(!contactData){
            contactList.push(contactObj);
        } else {
            const index = contactList.map(contact=>contact._id).indexOf(contactObj._id);
            contactList.splice(index,1,contactObj);
        }
    }else{
        contactList=[contactObj]
    }
    alert(contactObj.toString())
    localStorage.setItem("ContactList",JSON.stringify(contactList))
}
const cancel = ()=>{
    window.location.replace(site_properties.home_page);
}
const checkForUpdate = () =>{
    const contactJSON = localStorage.getItem('editContact');
    isUpdate = contactJSON ? true :false;
    if(!isUpdate) return;
    contactObj = JSON.parse(contactJSON);
    setForm();
}
const setForm = () =>{
    document.querySelector('#name').value = contactObj._name;
    document.querySelector('#phone').value = contactObj._phone;
    document.querySelector('#address').value= contactObj._address;
    document.querySelector('#city').value = contactObj._city;
    document.querySelector('#state').value = contactObj._state;
    document.querySelector('#zip').value = contactObj._zip;
}
