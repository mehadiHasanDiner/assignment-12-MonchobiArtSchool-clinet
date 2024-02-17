export const saveUsers = (user) => {
  const createdUsers = {
    name: user.displayName,
    email: user.email,
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
