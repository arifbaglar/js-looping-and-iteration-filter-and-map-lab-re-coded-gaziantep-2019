// Code your solution here:
function driversWithRevenueOver(array,number){
  const result = array.filter(arif => arif.revenue > number);
  return result;
}
function driverNamesWithRevenueOver(array,number){
  const result = array.filter(arif => arif.revenue > number);
  const result2 =result.map(isim=>isim.name);
  return result2;
}

function exactMatch(array,{key:value}){
  const newarray=array.filter(arif=> arif.name==array.key);
  return newarray;
  
}