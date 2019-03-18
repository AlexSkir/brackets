module.exports = function check(str, bracketsConfig) {
  // your solution
  
  var stack = [];    
  var len = str.length;

  function isOpen (openBracket){
    for (var op = 0; op < bracketsConfig.length; op++) {
      if (bracketsConfig[op][0] === openBracket) {
        return true;
      }
    }
    return false;  
  }
  function isSame(openCloseBracket){
    var same = [['|', '|'], ['7', '7'], ['8', '8']];
    for (var ocb = 0; ocb<same.length; ocb++){
      if (same[ocb][0] === openCloseBracket){
        return true;
      }
    }
    return false;
  }
  function isMatch(lastOfStack, closeBracket) {
    for (var match = 0; match < bracketsConfig.length; match++) {
      if (bracketsConfig[match][0] === lastOfStack && bracketsConfig[match][1] === closeBracket) {
        return true;
      }
    }
    return false;
  }

  for (var i = 0; i < len; i++) {
    var br=str[i];
    if (isSame(br)) {    
      if (stack.length == 0){
        stack.push(br);
      } else {
        var lastElement = stack.pop();
        if (!isMatch(lastElement, br)) {
          stack.push(lastElement, br);
        } else {        
          if (isMatch(lastElement, br)) {
            continue;
          }          
        }
      }

    } else if (isOpen(br) && !isSame(br)) {      
      stack.push(br);
    } else {
      if (stack.length == 0) { 
        return false;
      }
      var lastElement = stack.pop();    
      if (!isMatch(lastElement, br)) {      
        return false;
      }    
    }  
  }

  var result = stack.length == 0 ? true : false;
  return(result);
}