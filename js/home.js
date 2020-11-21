window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
      const headerHtml = "<th></th><th>Fullname</th><th>Address</th><th>City</th>"
                          +"<th>State</th><th>Zip Code</th><th>Phone Number</th>";
      let innerHtml = `${headerHtml}`;
      let addressBookList = createContactsJSON();
      for(const contact of addressBookList){
        innerHtml = `${innerHtml}
      <tr><td></td>
      <td>${contact._name}</td>
      <td>${contact._address}</td>
      <td>${contact._city}</td>
      <td>${contact._state}</td>
      <td>${contact._zip}</td>
      <td>${contact._phone}</td>
      <td>
          <img id="1" onclick="remove(this)" alt="delete"
              src="../assets/icons/delete-black-18dp.svg">
          <img id="1" alt="edit" onclick="update(this)" 
              src="../assets/icons/create-black-18dp.svg">
      </td>
      </tr>
      `;
      }
      document.querySelector('#table-display').innerHTML = innerHtml;
  }
  const createContactsJSON = () => {
    let contactList = [
        {
            _name: "Sreeja",
            _address: "E-31/19",
            _city: "Bangalore",
            _state: "Karanataka",
            _zip: "333030",
            _phone: "9873599502"
        },
        {
          _name: "Shreya",
          _address: "E-31/19",
          _city: "Bangalore",
          _state: "Karanataka",
          _zip: "333030",
          _phone: "9873299502"
      }
    ];
    return contactList;
  }
