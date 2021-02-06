function centsToDecimals(centValue){
  if (typeof centValue !== 'number'){
    return undefined
  } else if(isNaN(centValue)){
    return undefined
  }
  return ((centValue/100).toFixed(2) + '$')
}