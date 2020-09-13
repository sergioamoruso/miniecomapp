import axios from "axios";

const getItems = async (query) => {
  const requestUrl = `/api/items?q=${query}`;

  try {
    console.log({ msg: "Executing request...", value: requestUrl });
    const response = await axios.get(requestUrl);
    console.log({
      msg: "Request successful",
      categories: response.data.categories,
      items: response.data.items,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(
        {
          responseStatusCode: error.response.status,
          responseData: error.response.data,
        },
        "Server error"
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log({ request: error.request }, "Server error");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(error, "Error when executing request");
    }
    return null;
  }
};

const getItemDetail = async (id) => {
  const requestUrl = `/api/items/${id}`;

  try {
    console.log({ msg: "Executing request...", value: requestUrl });
    const response = await axios.get(requestUrl);
    console.log({
      msg: "Request successful",
      item: response.data.item,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(
        {
          responseStatusCode: error.response.status,
          responseData: error.response.data,
        },
        "Server error"
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log({ request: error.request }, "Server error");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(error, "Error when executing request");
    }
    return null;
  }
};

export default { getItems, getItemDetail };
