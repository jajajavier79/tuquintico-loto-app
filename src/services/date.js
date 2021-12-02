export default function date(x){
  let prev = new Date();    
    prev.setDate(prev.getDate() + (x-(7+prev.getDay())) % 7); // To get last weekend draw
      return prev
        .toISOString()
        .slice(0, 10)
        .replace('T',' ');
}
console.log("Last draw:", date(6))