import axios from 'axios'

function submitFormData(url,postHeaders,postData) {
  axios.post(url,{
    headers: postHeaders,
    data: postData
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export {
  submitFormData
}
