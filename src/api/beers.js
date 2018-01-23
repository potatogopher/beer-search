import axios from 'axios'

export const list = async (query = '') => {
  try {
    let response = await axios.get(`${process.env.API_HOST}/beers${query}`, {
      // Headers
    })
    return response
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that fails out of the range of 2xx
      return {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return error.request
    } else {
      // Something happened in setting up the request that triggered an Error
      return error
    }
  }
}

export const show = async (id) => {
  try {
    let response = await axios.get(`${process.env.API_HOST}/beers/${id}`, {
      // Headers
    })
    return response
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that fails out of the range of 2xx
      return {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return error.request
    } else {
      // Something happened in setting up the request that triggered an Error
      return error
    }
  }
}
