import {
 countryList,
 connect,
 disconnect,
 status
} from "./src/api/vpn.js";


const path = window.location.pathname;


if(path==="/api/vpn/countries"){

document.body.innerHTML=
JSON.stringify(countryList(),null,2);

}


else if(path==="/api/vpn/connect"){

let c=new URLSearchParams(
location.search
).get("country");

document.body.innerHTML=
JSON.stringify(connect(c),null,2);

}


else if(path==="/api/vpn/disconnect"){

document.body.innerHTML=
JSON.stringify(disconnect(),null,2);

}


else if(path==="/api/vpn/status"){

document.body.innerHTML=
JSON.stringify(status(),null,2);

}


else{

document.body.innerHTML=
JSON.stringify({
 success:false,
 status:404,
 error:"Endpoint not found"
},null,2);

}
