const getData = async (setData) => {
    
    const res = await fetch('https://e-litmus-backend.vercel.app/getdetails')
    const data = await res.json()
    // console.log(data) 

    let result=[]
    Object.keys(data).forEach(function(key, index) {
        result.push(data[key])
      });
    setData(result)
    
}
export {getData}