// function getInfo() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.pexels.com/v1/search?query=nature&per_page=1', true);
//     xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//     xhr.setRequestHeader('X-API-Key', '563492ad6f9170000100000191b72a185fe644a5a08c524402334049');
//     xhr.onload = function () {
//         if (this.status == 200) {
//             console.log('Worked');
//         } else {
//             console.log(this.status);
//         }
//     }
//     xhr.onerror = function () {
//         console.log('Request Error');
//     }
//     xhr.send();
// }
// getInfo();

// Grab user search input
function grabUserCity() {
  const userCity = document.querySelector("#city").value
  console.log(userCity);
}
// On button click
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    grabUserCity();
  });
// On keyboard enter key
document.querySelector("#city").addEventListener("keyup", (e) => {
  if (event.keyCode === 13) {
    e.preventDefault();
    grabUserCity();
  }
});

const cities = ['Tokyo', 'New York', 'Mexico City', 'Mumbai', 'Sao Paulo', 'Delhi', 'Shanghai', 'Kolkata', 'Los Angeles', 'Dhaka', 'Buenos Aires', 'Karachi', 'Cairo', 'Rio de Janeiro', 'Osaka', 'Beijing', 'Manila', 'Moscow', 'Istanbul', 'Paris', 'Seoul', 'Lagos', 'Jakarta', 'Guangzhou', 'Chicago', 'London', 'Lima', 'Tehran', 'Kinshasa', 'Bogota', 'Shenzhen', 'Wuhan', 'Hong Kong', 'Tianjin', 'Chennai', 'Taipei', 'Bengaluru', 'Bangkok', 'Lahore', 'Chongqing', 'Miami', 'Hyderabad', 'Dallas', 'Santiago', 'Philadelphia', 'Belo Horizonte', 'Madrid', 'Houston', 'Ahmadabad', 'Ho Chi Minh City', 'Washington', 'Atlanta', 'Toronto', 'Singapore', 'Luanda', 'Baghdad', 'Barcelona', 'Haora', 'Shenyang', 'Khartoum', 'Pune', 'Boston', 'Sydney', 'Saint Petersburg', 'Chittagong', 'Dongguan', 'Riyadh', 'Hanoi', 'Guadalajara', 'Melbourne', 'Alexandria', 'Chengdu', 'Rangoon', 'Phoenix', 'Porto Alegre', 'Surat', 'Hechi', 'Abidjan', 'Brasilia', 'Ankara', 'Monterrey', 'Yokohama', 'Nanjing', 'Montreal', 'Guiyang', 'Recife', 'Seattle', 'Harbin', 'San Francisco', 'Fortaleza', 'Zhangzhou', 'Detroit', 'Salvador', 'Busan', 'Johannesburg', 'Berlin', 'Algiers', 'Rome', 'Pyongyang', 'Medellin', 'Kabul', 'Athens', 'Nagoya', 'Cape Town', 'San Diego', 'Changchun', 'Casablanca', 'Dalian', 'Cawnpore', 'Kano', 'Tel Aviv-Yafo', 'Addis Ababa', 'Curitiba', 'Zibo', 'Jeddah', 'Nairobi', 'Hangzhou', 'Benoni', 'Caracas', 'Milan', 'Stuttgart', 'Kunming', 'Dar es Salaam', 'Minneapolis', 'Jaipur', 'Taiyuan', 'Frankfurt', 'Qingdao', 'Surabaya', 'Lisbon', 'Tampa', 'Jinan', 'Fukuoka', 'Campinas', 'Denver', 'Kaohsiung', 'Quezon City', 'Katowice', 'Aleppo', 'Durban', 'Kyiv', 'Lucknow', 'Giza', 'Zhengzhou', 'Taichung', 'Brooklyn', 'Ibadan', 'Faisalabad', 'Fuzhou', 'Changsha', 'Dakar', 'Izmir', 'Xiangtan', 'Lanzhou', 'Incheon', 'Sapporo', 'Xiamen', 'Guayaquil', 'George Town', 'Mashhad', 'Damascus', 'Daegu', 'Nagpur', 'Lianshan', 'Shijiazhuang', 'Tunis', 'Vienna', 'Jilin', 'Omdurman', 'Bandung', 'Bekasi', 'Mannheim', 'Nanchang', 'Wenzhou', 'Queens', 'Vancouver', 'Birmingham', 'Cali', 'Naples', 'Sendai', 'Manchester', 'Puebla', 'Tripoli', 'Tashkent', 'Havana', 'Gaoping', 'Baltimore', 'Nanning', 'Belem'];

function autocomplete(inp, arr) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
    closeAllLists();
        if (!val) {return false;}  
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocompleteList");
        a.setAttribute("class", "autocompleteItems");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            // check if the item starts with the same letters as the text field value
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            // create a DIV element for each matching element
            b = document.createElement("DIV");
            // make the matching letters bold
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            // insert a input field that will hold the current array item's value
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.querySelectorAll("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocompleteList");
        if (x) x = x.querySelectorAll("div");
        if (e.keyCode == 40) {
          // If the arrow DOWN key is pressed, increase the currentFocus variable
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          // If the arrow UP key is pressed, decrease the currentFocus variable
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          // If the ENTER key is pressed, prevent the form from being submitted
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocompleteActive");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocompleteActive");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.querySelectorAll(".autocompleteItems");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  } 
autocomplete(document.querySelector("#city"), cities);


// const uri = 'https://api.pexels.com/v1/search?query=people';

// let h = new Headers();
// h.append('Accept', 'application/json');
// let req = new Request (uri, {
//     method: 'GET',
//     headers: h,
//     setRequestHeader()Authorization: 563492ad6f9170000100000191b72a185fe644a5a08c524402334049
// });


// fetch(req)
//     .then( (response) => {
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('error');
//         }
//     })
//     .then( (jsonData) => {
//         console.log(jsonData);

//     })
//     .catch( (err) => {
//         console.log('ERROR:', err.message);
//     })
