// TODO: add and export your own actions

export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const CREATE_MESSAGE = 'CREATE_MESSAGE'

export function fetchMessages(channel) {
  const url = "https://wagon-chat.herokuapp.com/" + channel + "/messages";
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_MESSAGES,
        payload: data
      };
    });
}

export function createMessage(channel, author, content) {
  const url = "https://wagon-chat.herokuapp.com/" + channel + "/messages";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
          author: author,
          content: content
    })
  })
    .then(response => response.json())
    .then((data) => {
      return {
        type: CREATE_MESSAGE,
        payload: data
      };
    });
}
