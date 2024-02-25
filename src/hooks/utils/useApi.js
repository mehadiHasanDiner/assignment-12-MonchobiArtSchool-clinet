// saving user for changing their role
export const saveUsers = (user) => {
  const createdUsers = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
  fetch(`${import.meta.env.VITE_URL_KEY}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(createdUsers),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// make admin
export const makeAdmin = (email) => {
  const currentUser = {
    role: "admin",
  };
  return fetch(`${import.meta.env.VITE_URL_KEY}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// make instructor
export const makeInstructor = (email) => {
  const currentUser = {
    role: "instructor",
  };
  return fetch(`${import.meta.env.VITE_URL_KEY}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// get user role
// export const getRole = async (email) => {
//   const response = await fetch(
//     `${import.meta.env.VITE_URL_KEY}/users/${email}`
//   );
//   const user = await response.json();
//   return user?.role;
// };
