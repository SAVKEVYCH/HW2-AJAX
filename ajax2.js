const URL = 'https://jsonplaceholder.typicode.com';

document.querySelector(".creat-user").addEventListener("click", (e) => e.preventDefault());

const request = (endpoint, method = "GET", data = {}) => {
  const body = method === "GET" ? void 0 : JSON.stringify(data);
  return fetch(`${URL}/${endpoint}`, {
    method,
    body,
       headers: {
        "Content-Type": "applecation/json"
       }
  })
  .then((res) => res.json())
  .catch((err) => {
    console.error(err)
  });
};
//const setContent = (content) => {
//  document.body.innerHTML += content;
//}
const renderUsers = (users) => {
  const usersWrapper = document.querySelector(".users-wrapper");
  users.forEach((user) => {
    console.log(user);
      usersWrapper.innerHTML += 
      `<div class="user">
      Name: ${user.name} <br />
      Phone: ${user.phone} <br />
      Email: ${user.email} <br />
      </div>`;
  })
}

const renderOneUser = (user) => {
    const usersWrapper = document.querySelector(".users-wrapper");
     usersWrapper.innerHTML += 
     `<div class="user">
      Name: ${user.name} <br />
      Phone: ${user.phone} <br />
      Email: ${user.email} <br />
     </div>`;
}

const addUser = async () => {
  const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const userResponse = await request("users/", "POST",{
  
    });
    
    renderOneUser({
      name,
      phone,
      email,
    });
};
const getUsers = async () => {
  try{
  const users = await request('users/');  
  renderUsers(users);
      //setContent(JSON.stringify (users));
      
} catch(err) {
  alert(err);
 }
}


const button = document.querySelector("#get-users");
button.addEventListener("click", getUsers);
const creatButton = document.querySelector("#creat-user-button");
creatButton.addEventListener("click", addUser);