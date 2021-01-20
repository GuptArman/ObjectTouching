function touching(a,b){
    if(abs(a.x-b.x)<=a.width/2+b.width/2 && 
    abs(a.y-b.y)<=a.height/2+b.height/2){
     return true
    }else{
     return false
    }
  }