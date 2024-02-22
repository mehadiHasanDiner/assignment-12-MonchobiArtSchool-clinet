export const setApprovedDenied = (id, status) => {
  return fetch(`${import.meta.env.VITE_URL_KEY}/allClasses/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ status: status }),
  }).then((res) => res.json());
};

export const sendFeedback = (id, feedback) => {
  return fetch(`${import.meta.env.VITE_URL_KEY}/allClasses/feedback/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ feedback: feedback }),
  }).then((res) => res.json());
};
