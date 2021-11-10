function findMatching(array, string) {
    return array.filter(function(el) {
      return el.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
  }       

  function fuzzyMatch(array, string) {
      return array.filter(function(element) {
          return element.toLowerCase().indexOf(string.toLowerCase()) === 0
        })
    }    

function matchName(array, string) {
    return array.filter(function(element){
        return element.name === string
    })
}