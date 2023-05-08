const getData = async (setData) => {

    const res = await fetch('http://localhost:3001/getdetails')
    const data = await res.json()
    // console.log(data) 

    let result=[]
    Object.keys(data).forEach(function(key, index) {
        result.push(data[key])
      });
    setData(result)
    
}
export {getData}