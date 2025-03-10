


const htttpGetRequest = async (url, endPoint) => {
    await fetch(`${url}${endPoint}`)
    .then(res => {
      // IF statement resolves the Promise  
      if(res.ok) {
          return res.json()
      } else {
          return res.json()
        }
      })
      // .then statement here assigns value instead of the promise becuase it was resolved in the IF statement.
      // .then( data => stateSetter(data))
    }

  

  const htttpPostRequest = async (url, endPoint, postData, stateSetter) => {
    // console.log("hit post function", postData)
    return fetch(`${url}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        "Accept": "Application/json"
        
      },
      body: JSON.stringify(postData)
    })
    .then(res => {  
      if(res.ok) {
        return res.json()
    } else {
        return res.json()
      }
    })
    // .then statement here assigns value instead of the promise becuase it was resolved in the IF statement.
    // .then( data => {
    //   console.log(data)
    //   stateSetter(data)})
    }
  
  const htttpPatchRequest = (url, endPoint, data, stateSetter) => {
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
        return res.json()
    } else {
        return res.json()
      }
    })
    // .then statement here assigns value instead of the promise becuase it was resolved in the IF statement.
    .then( data => stateSetter(data))
    }


  const htttpDeleteRequest = async (url, endPoint, stateSetter) => {
    await fetch(`${url}${endPoint}`, {
    method: "DELETE"
  })
  .then(res => {  
    // if(res.ok) {
    //     res.json().then( data => {
    //       serverResponse = data})
        
    // } else {
    //   res.json().then(errors => {
    //     serverResponse = errors
    //   })
    //   }
    // })
    // return serverResponse
    if(res.ok) {
      return res.json()
  } else {
      return res.json()
    }
  })
  // .then statement here assigns value instead of the promise becuase it was resolved in the IF statement.
  .then( data => stateSetter(data))
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

  export {crud}