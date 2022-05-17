module.exports = rows => {
    return new Promise((resolver, reject) => {
       try{
           const words = rows
        resolver(rows)
       }catch(error){
           reject(error)
       }
    })
}
 
function filterValidRow(){
    
}
