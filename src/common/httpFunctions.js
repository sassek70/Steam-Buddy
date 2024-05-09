
let info;


const htttpGetRequest = (url, endPoint) => {
    fetch(`${url}${endPoint}`)
    .then(res => {  
      if(res.ok) {
          res.json().then( data => {

            console.log(data)
            info = data
            // const info = data
            console.log(info)

            // console.log(testResposne)
            // return testResposne
          })
          
        } else {
          res.json().then(errors => {
            // testResposne = errors
          })
        }
      })
      // console.log("before return " + info)
      return info
    }

  

  const htttpPostRequest = (url, endPoint, data) => {
    let serverResponse
    fetch(`${url}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => {  
      if(res.ok) {
          res.json().then( data => {
            serverResponse = data})
          
      } else {
        res.json().then(errors => {
          serverResponse = errors
        })
        }
      })
      return serverResponse
    }
  
  const htttpPatchRequest = (url, endPoint, data) => {
    let serverResponse
    fetch(`${url}${endPoint}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => {  
      if(res.ok) {
          res.json().then( data => {
            serverResponse = data})
          
      } else {
        res.json().then(errors => {
          serverResponse = errors
        })
        }
      })
      return serverResponse
    }
  const htttpDeleteRequest = (url, endPoint) => {
    let serverResponse
    fetch(`${url}${endPoint}`, {
    method: "DELETE"
  })
  .then(res => {  
    if(res.ok) {
        res.json().then( data => {
          serverResponse = data})
        
    } else {
      res.json().then(errors => {
        serverResponse = errors
      })
      }
    })
    return serverResponse
  }

  const setResponseObjectData = (data) => {
    // crud.response = data

  }

// this needs to come from a server
// const localHostTest = () => {
//   fetch(`http://localhost:3000/steam`)
//     .then(res => {
//       if(res.ok) {
//         res.json().then(user => console.log(user))
//       } else {
//         res.json().then(errors => console.log(errors))
//       }
//     })
    
//   }

  // const railsEnvTest = () => {
  //   fetch(`http://localhost:3000/env`)
  //     .then(res => {
  //       if(res.ok) {
  //         res.json().then(user => console.log(user))
  //       } else {
  //         res.json().then(errors => console.log(errors))
  //       }
  //     })
      
  //   }

  const crud = {
    get: htttpGetRequest,
    post: htttpPostRequest,
    patch: htttpPatchRequest,
    delete: htttpDeleteRequest,
  }

  export {crud,  setResponseObjectData}