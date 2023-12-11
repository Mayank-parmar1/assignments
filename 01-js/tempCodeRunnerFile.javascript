str1="listen";
str2="silent";
function isAnagram(str1, str2) {
    let a=str1.sort();
    let b=str2.sort();
    if(str1!=str2){
      return false;
    }
    
    for(let i=0;i<str1.length();i++){
      if(str1[i]!=str2[i]){
        return false;
      }
    }
    return true;
  
  }
  let x=isAnagram(str1,str2);
  print(x);