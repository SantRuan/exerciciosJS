// Dado um vetor com duas strings, pegar os valores em comuns dessa string e transforma-lo em uma únicaa string

function FindIntersection(strArr) { 

    // code goes here  
  
  
      firstArr = strArr[0].split(/, /)
      secondArr = strArr[1].split(/, /)
   
      common = []
      console.log(firstArr)
      console.log(secondArr)
      for(let i=0; i< firstArr.length ; i++){
  
          for(let j=0; j< firstArr.length ; j++){
              if(firstArr[i] === secondArr[j]){
                common.push(secondArr[j])
                
              }
      }
  
      }
    
     newArr = common.join().toString()
    return newArr; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));