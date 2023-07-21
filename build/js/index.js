function success(){
    if(validateForm()){
        document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert">Thank you! You will receive an email shortly </div>';
        window.scrollTo(0, document.body.scrollHeight);
        
    }
    else{
        document.getElementById("alert").innerHTML = '<div class="alert alert-danger" role="alert">Invalid Input</div>';
        window.scrollTo(0, document.body.scrollHeight);
        return;
    }

}


function loadChoices() {
    

var str = ""

for(var program of data){
  var name = program["name"]
  str += '<option value="' + name +'">'  + name + '</option>'
      
}
document.getElementById("package-select").innerHTML = str;
}
window.onload = function() {
loadChoices();

};

function validateForm() {
    let firstName = document.forms["join-us"]["firstname"].value;
    let lastName = document.forms["join-us"]["lastname"].value;
    let email = document.forms["join-us"]["email"].value;
    let phoneNumber = document.forms["join-us"]["phonenumber"].value.replace(/\s+/g, '');
    if (firstName == "" || /\d/.test(firstName) || lastName == "" || /\d/.test(lastName) || !email.includes("@") || !email.includes(".") || (phoneNumber == "" || /[a-zA-Z]/g.test(phoneNumber) || phoneNumber.length > 15 || phoneNumber.length < 10 )) {
      
      return false;
    }
    else{
        return true;
    }
  }



const data = [
    {
        "id": 0,
        "name": "Tiapko Uaw",
        "location": "Port Hardy",
        "hours": "Morning",
        "Martial Art": "MMA"
      },
      {
        "id": 1,
        "name": "Haahluhle",
        "location": "Comox Valley",
        "hours": "Morning",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 2,
        "name": "Kbadel",
        "location": "Campbell Arena",
        "hours": "Day",
        "Martial Art": "MMA"
      },
      {
        "id": 3,
        "name": "Akyundos",
        "location": "Campbell Arena",
        "hours": "Evening",
        "Martial Art": "MMA"
      },
      {
        "id": 4,
        "name": "Naru",
        "location": "Port Hardy",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 5,
        "name": "Fuduzem",
        "location": "Campbell Arena",
        "hours": "Evening",
        "Martial Art": "Boxing"
      },
      {
        "id": 6,
        "name": "Shallay",
        "location": "Comox Valley",
        "hours": "Day",
        "Martial Art": "Boxing"
      },
      {
        "id": 7,
        "name": "Fojugahn",
        "location": "Comox Valley",
        "hours": "Evening",
        "Martial Art": "MMA"
      },
      {
        "id": 8,
        "name": "Kbadel",
        "location": "Comox Valley",
        "hours": "Evening",
        "Martial Art": "Boxing"
      },
      {
        "id": 9,
        "name": "Fuduzem",
        "location": "Campbell Arena",
        "hours": "Evening",
        "Martial Art": "MMA"
      },
      {
        "id": 10,
        "name": "Dobontoe",
        "location": "Port Hardy",
        "hours": "Evening",
        "Martial Art": "MMA"
      },
      {
        "id": 11,
        "name": "Preshoo",
        "location": "Campbell Arena",
        "hours": "Morning",
        "Martial Art": "Boxing"
      },
      {
        "id": 12,
        "name": "Nagria Ouje",
        "location": "Port Hardy",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 13,
        "name": "Vose",
        "location": "Comox Valley",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 14,
        "name": "Laihlino",
        "location": "Port Hardy",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 15,
        "name": "Tiapko Uaw",
        "location": "Port Hardy",
        "hours": "Day",
        "Martial Art": "Boxing"
      },
      {
        "id": 16,
        "name": "Gwanges Thaw",
        "location": "Comox Valley",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 17,
        "name": "Chuyer Wo",
        "location": "Campbell Arena",
        "hours": "Evening",
        "Martial Art": "MMA"
      },
      {
        "id": 18,
        "name": "Por-Soshoo",
        "location": "Comox Valley",
        "hours": "Morning",
        "Martial Art": "Boxing"
      },
      {
        "id": 19,
        "name": "Wato-Meocue",
        "location": "Campbell Arena",
        "hours": "Morning",
        "Martial Art": "MMA"
      },
      {
        "id": 20,
        "name": "Gelanchoo",
        "location": "Campbell Arena",
        "hours": "Day",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 21,
        "name": "Cuhwo-Shu",
        "location": "Campbell Arena",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 22,
        "name": "Nhullial",
        "location": "Campbell Arena",
        "hours": "Morning",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 23,
        "name": "Haahluhle",
        "location": "Campbell Arena",
        "hours": "Morning",
        "Martial Art": "Boxing"
      },
      {
        "id": 24,
        "name": "Takyein",
        "location": "Port Hardy",
        "hours": "Day",
        "Martial Art": "MMA"
      },
      {
        "id": 25,
        "name": "Por-Soshoo",
        "location": "Comox Valley",
        "hours": "Evening",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 26,
        "name": "Goehnobi",
        "location": "Comox Valley",
        "hours": "Morning",
        "Martial Art": "Boxing"
      },
      {
        "id": 27,
        "name": "Shekecheo",
        "location": "Port Hardy",
        "hours": "Day",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 28,
        "name": "Sabnea",
        "location": "Comox Valley",
        "hours": "Day",
        "Martial Art": "Muay Thai"
      },
      {
        "id": 29,
        "name": "Wambahni",
        "location": "Comox Valley",
        "hours": "Evening",
        "Martial Art": "MMA"
      }
  ]


