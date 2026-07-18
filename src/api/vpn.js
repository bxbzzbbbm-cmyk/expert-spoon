import countries from "../data/countries";

let vpn = null;


export function countryList(){
 return {
   success:true,
   count:countries.length,
   countries
 };
}


export function connect(country){

 const server=countries.find(
  x=>x.code===country || x.name===country
 );

 if(!server){
  return {
   success:false,
   status:404,
   error:"Country not found"
  };
 }

 vpn=server;

 return {
  success:true,
  status:"connected",
  country:server.name,
  flag:server.flag,
  ip:server.ip
 };
}


export function disconnect(){

 vpn=null;

 return {
  success:true,
  status:"disconnected"
 };
}


export function status(){

 return {
  success:true,
  connected:!!vpn,
  server:vpn
 };
}
