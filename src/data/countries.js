const countries = [
  {code:"US",name:"United States",flag:"🇺🇸",ip:"10.1.0.1"},
  {code:"GB",name:"United Kingdom",flag:"🇬🇧",ip:"10.2.0.1"},
  {code:"CA",name:"Canada",flag:"🇨🇦",ip:"10.3.0.1"},
  {code:"DE",name:"Germany",flag:"🇩🇪",ip:"10.4.0.1"},
  {code:"FR",name:"France",flag:"🇫🇷",ip:"10.5.0.1"},
  {code:"IT",name:"Italy",flag:"🇮🇹",ip:"10.6.0.1"},
  {code:"ES",name:"Spain",flag:"🇪🇸",ip:"10.7.0.1"},
  {code:"JP",name:"Japan",flag:"🇯🇵",ip:"10.8.0.1"},
  {code:"KR",name:"South Korea",flag:"🇰🇷",ip:"10.9.0.1"},
  {code:"AU",name:"Australia",flag:"🇦🇺",ip:"10.10.0.1"}
];

const extraCountries = [
"BR","IN","CN","RU","NL","SE","NO","FI","DK","PL",
"CH","AT","BE","PT","GR","TR","UA","RO","CZ","HU",
"MX","AR","CL","CO","PE","ZA","EG","NG","KE","MA",
"IL","SA","AE","QA","SG","TH","VN","ID","MY","PH",
"NZ","IE","IS","EE","LV","LT","SK","SI","HR","BG",
"RS","BA","AL","MK","GE","AM","AZ","KZ","PK","BD",
"LK","NP","MM","KH","LA","MN","TW","HK","MO","BN",
"FJ","WS","TO","PG","UY","PY","BO","EC","VE","CR",
"PA","GT","HN","SV","NI","DO","JM","TT","CU","HT",
"TN","DZ","ET","GH","TZ","UG","CM","SN","CI","ZW"
];

extraCountries.forEach((code,index)=>{
  countries.push({
    code,
    name:`Country ${code}`,
    flag:String.fromCodePoint(
      ...code.split("").map(c=>127397+c.charCodeAt())
    ),
    ip:`10.${index+11}.0.1`
  });
});

export default countries;
