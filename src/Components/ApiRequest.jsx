 let getCars=()=>{
    return fetch("https://zany-plum-bee-garb.cyclic.app/car",{
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    }).then((res)=>res.json())
  }

  let getOems=()=>{
    return fetch("https://zany-plum-bee-garb.cyclic.app/newcars",{
    }).then((res)=>res.json())
  }
export {getCars,getOems}