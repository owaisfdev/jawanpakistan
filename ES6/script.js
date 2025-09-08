//// Global Scope
var globalVar = "Variable";
let globalLet = "VariableLet";
const globalConst = "ConstantHere";
console.log(globalVar, globalLet, globalConst);

//// Function Scope
function demoFuncScope() {
  var fVar = "FuncVar";
  let fLet = "FuncLet";
  const fConst = "FuncConst";
  console.log(fVar, fLet, fConst);
}
demoFuncScope();

//// Block Scope
if (true) {
  var blkVar = "BlkVar";
  let blkLet = "BlkLet";
  const blkConst = "BlkConst";
}
console.log(blkVar);

//// Hoisting var
console.log(hVar);
var hVar = "HoistVar";

//// Hoisting let/const
let hLet = "HoistLet";
const hConst = "HoistConst";

//// Re-declaration
var rede = "One";
var rede = "Two";
console.log(rede);

//// Re-assignment
var rV = 10; rV = 20; console.log(rV);
let rL = 5; rL = 15; console.log(rL);
const rC = 50;

//// TDZ
let tdzL = "TDZLet";
const tdzC = "TDZConst";

//// Usage Examples
function sumVar(arr){ var tot=0; for(var i=0;i<arr.length;i++) tot+=arr[i]; return tot; }
console.log(sumVar([2,3,4]));

for (let i=0;i<2;i++){ console.log("loop",i); }
const BASE_API = "https://randomapi.com"; console.log(BASE_API);

//// String Interpolation
let first="Liam", last="Smith";
let full= `${first} ${last}`;
console.log(full);

//// Multi-line
let addr = `House 42
Street XYZ
Lahore`;
console.log(addr);

//// Expressions
let num1=9, num2=11;
console.log(`Sum is ${num1+num2}`);

//// Function calls
function multiply(x,y){ return x*y; }
console.log(`Product is ${multiply(3,9)}`);

//// Tagged template
function tagFn(strings,...vals){ console.log("Strs:",strings,"Vals:",vals); }
tagFn`Hello ${first} ${last}`;

//// Formatting tag
function upTag(strings,...vals){ let s=""; for(let i=0;i<strings.length;i++){ s+=strings[i]; if(i<vals.length) s+=vals[i]; } return s.toUpperCase(); }
console.log(upTag`hi ${"planet"}`);

//// Conditional
let hr=20;
console.log(`${hr<12?"Morning":"Evening"}`);

//// Loops in templates
let items=["Tea","Coffee","Juice"];
let listHtml=`<ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
console.log(listHtml);

//// Escaping backticks
let bTick = `This is a backtick: \``;
console.log(bTick);

//// Nested template
let rowsArr=[["X1","Y1"],["X2","Y2"]];
let tbl=`<table>${rowsArr.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
console.log(tbl);

//// Condition
let ageCheck = 21;
console.log(ageCheck>=18?"Yes":"No");

//// Even/Odd
let n=14;
console.log(n%2===0?"Even":"Odd");

//// Grade
let scr=76;
let grd=scr>=90?"A":scr>=80?"B":scr>=70?"C":scr>=60?"D":"F";
console.log(grd);

//// Login
let logged=false;
console.log(logged?"Welcome!":"Login pls");

//// Discount
let mem=true,purAmt=200;
let disc=(mem && purAmt>100)?purAmt*0.1:0;
console.log(disc);

//// Max function
function maxVal(a,b){ return a>b?a:b; }
console.log(maxVal(12,25));

//// Greet
function greetUsr(name){ return name?`Hello, ${name}!`:"Hello, Guest!"; }
console.log(greetUsr("Zara"));
console.log(greetUsr(""));

//// Map even/double odd/triple
let nums=[2,5,8,11];
console.log(nums.map(n=>n%2===0?n*2:n*3));

//// Filter strings length>3
let strs=["on","sky","cloud","rain"];
console.log(strs.filter(s=>s.length>3));

//// Copy array
let oriArr=[4,5,6]; let copyArr=[...oriArr];
console.log(oriArr,copyArr,oriArr===copyArr);

//// Merge arrays
let arrA=[7,8],arrB=[9,10];
console.log([...arrA,...arrB]);

//// Add array elements
let addArr=[3,4]; addArr=[2,...addArr,5];
console.log(addArr);

//// Copy object
let origObj={x:1,y:2}; let copyObj={...origObj};
console.log(origObj,copyObj,origObj===copyObj);

//// Merge objects
let o1={p:1,q:2},o2={q:99,r:3};
console.log({...o1,...o2});

//// Update object
let usr={name:"Mia",age:29,email:"old@example.com"};
let updUsr={...usr,email:"new@example.com",city:"Islamabad"};
console.log(updUsr);

//// Spread in args
function sumArgs(a,b,c){ return a+b+c; }
console.log(sumArgs(...[5,6,7]));

//// Combine arrays
function combine(...arrs){ return arrs.flat(); }
console.log(combine([1,2],[3,4],[5]));

//// Rest param multiply
function multi(m,...vals){ return vals.map(v=>v*m); }
console.log(multi(4,1,2,3));

//// Shallow nested copy
let nestArr=[[1,2],[3,4]]; let shallow=[...nestArr]; shallow[0][0]=999;
console.log("orig",nestArr,"copy",shallow);

//// Sum rest
function sumRestFn(...nums){ return nums.reduce((a,n)=>a+n,0); }
console.log(sumRestFn(1,2,3),sumRestFn(10,20,30));

//// Average
function avg(...nums){ return nums.length?nums.reduce((a,n)=>a+n,0)/nums.length:0; }
console.log(avg(4,8,12),avg());

//// First/rest
let arrNums2=[100,200,300,400]; let [fst,...rst]=arrNums2;
console.log(fst,rst);

//// Skip/rest
let cols=["red","green","blue","purple","pink"];
let [,,...restCols]=cols;
console.log(restCols);

//// Object destructure rest
let p={name:"Nina",age:26,email:"nina@example.com",city:"Karachi"};
let {name:nName,email:nEmail,...nRest}=p;
console.log(nName,nEmail,nRest);

//// Nested object
let stud={id:2,name:"Leo",grades:[88,92],info:{age:21,major:"Math"}};
let {id, name:sName, info:{major}, ...sR} = stud;
console.log(id,sName,major,sR);

//// Filter even rest
function evens(...nums){ return nums.filter(n=>n%2===0); }
console.log(evens(1,2,3,4,5,6));

//// Combine/sort arrays
function combineSort(...arrs){ return arrs.flat().sort((a,b)=>a-b); }
console.log(combineSort([5,1],[3,2],[9,7]));

//// Array destructuring
let fruits2=["mango","papaya","kiwi"];
let [f1,f2,f3]=fruits2;
console.log(f1,f2,f3);

//// Skip elements
let colors3=["cyan","magenta","yellow","black"];
let [primary,,tertiary]=colors3;
console.log(primary,tertiary);

//// Rest operator
let nums5=[10,20,30,40];
let [firstN,...remN]=nums5;
console.log(firstN,remN);

//// Object simple destructure
let person4={name:"Oscar",age:32,city:"Lahore"};
let {name,age:age4,city}=person4;
console.log(name,age4,city);

//// Rename variables
let vehicle={make:"Ford",model:"Fiesta",year:2021};
let {make:vMake,model:vModel,year:vYear}=vehicle;
console.log(vMake,vModel,vYear);

//// Default values
let cfg={theme:"dark"};
let {theme,lang="English"}=cfg;
console.log(theme,lang);

//// Array nested destructuring
let nArr=[[11,12],[13,14],[15,16]];
let [[a1],[b1],[c1]]=nArr;
console.log(a1,b1,c1);

//// Nested object
let prof={username:"usr7",details:{email:"u7@ex.com",addre:"PK"}};
let {username,email,details:{addre}}=prof;
console.log(username,email,addre);

//// Mix arrays/objects
let data2={id:77,info:[{name:"Nora"},{age:30}]};
let {id:did,info:[{name:dName},{age:dAge}]}=data2;
console.log(did,dName,dAge);

//// Array params
function printCrd([x,y]){ console.log("x:",x,"y:",y); }
printCrd([7,14]); printCrd([21,28]);

//// Object params
function showUsr({name,age}){ console.log("name:",name,"age:",age); }
showUsr({name:"Lara",age:24}); showUsr({name:"Omar",age:31});

//// List keys
let bk={title:"Book B",author:"Author B",year:2021};
console.log(Object.keys(bk));

//// Count props
let st2={name:"Eva",age:22,grade:"B",school:"XYZ"};
console.log(Object.keys(st2).length);

//// Iterate keys
let prod={name:"Laptop",price:70000,category:"Electronics"};
Object.keys(prod).forEach(k=>console.log(k,prod[k]));

//// List values
let mv={title:"Interstellar",director:"Nolan",year:2014,genre:"Sci-Fi"};
console.log(Object.values(mv));

//// Sum values
let sc={math:75,physics:85,chem:90};
console.log(Object.values(sc).reduce((a,n)=>a+n,0));

//// Iterate values
let uVals={username:"usr9",email:"u9@ex.com",loc:"PK"};
Object.values(uVals).forEach(v=>console.log(v));

//// List entries
let car3={make:"BMW",model:"X5",year:2022};
console.log(Object.entries(car3));

//// Object to array
let p3={firstName:"Max",lastName:"Payne",age:35};
console.log(Object.entries(p3));

//// Iterate entries
let cfg2={theme:"light",notif:true,privacy:"high"};
Object.entries(cfg2).forEach(([k,v])=>console.log(k,v));

//// Filter keys
let inv={apples:6,bananas:15,oranges:22,grapes:9};
console.log(Object.keys(inv).filter(k=>inv[k]>10));

//// Transform values
let temps={morning:22,afternoon:31,evening:27};
let fTemps=Object.fromEntries(Object.entries(temps).map(([k,c])=>[k,c*9/5+32]));
console.log(fTemps);

//// Swap key/val
let roles2={admin:"x1",editor:"y1",viewer:"z1"};
console.log(Object.fromEntries(Object.entries(roles2).map(([k,v])=>[v,k])));

//// Filter/map HOF
function fMap(arr,f,mapF){ return arr.filter(f).map(mapF); }
console.log(fMap([1,2,3,4,5,6],n=>n%2!==0,n=>n*n));

//// Sort/reduce HOF
function sReduce(arr,sortF,redF){ return arr.sort(sortF).reduce(redF); }
console.log(sReduce(["pear","apple","kiwi"],(a,b)=>a.localeCompare(b),(acc,w)=>acc?acc+" "+w:w));

//// Simple callback
function greetCb2(name,cb){ cb(`Hi, ${name}!`); }
function prt(msg){ console.log(msg); }
greetCb2("Maya",prt);

//// Async callback
function fetchMock(cb){ setTimeout(()=>cb({id:2,title:"Mock"}),400); }
function showData(d){ console.log("Got:",d); }
fetchMock(showData);

//// Arrow
const addArrow=(a,b)=>a+b;
console.log(addArrow(4,6));

//// Arrow array
console.log([1,2,3,4,5].map(n=>n*n));

//// Scope demo
function outFunc(){ let xVal=20; function inFunc(){ console.log("x=",xVal); } inFunc(); }
outFunc();

//// Closure
function counterFactory(){ let c=0; return function(){ c++; console.log(c); }; }
let cnt1=counterFactory(), cnt2=counterFactory();
cnt1(); cnt1(); cnt2(); cnt1(); cnt2();

//// Default params
function greetDef(name,greet="Hello"){ console.log(`${greet}, ${name}`); }
greetDef("Leo"); greetDef("Leo","Hi");

//// Default with others
function area(w=12,h=6){ return w*h; }
console.log(area(),area(5,9));

//// Map square
console.log([1,2,3,4,5].map(n=>n*n));

//// Map uppercase
console.log(["grape","melon","kiwi"].map(w=>w.toUpperCase()));

//// Filter even
console.log([1,2,3,4,5,6,7,8,9,10].filter(n=>n%2===0));

//// Filter long words
console.log(["apple","banana","kiwi","mango"].filter(w=>w.length>5));

//// ForEach numbers
[1,2,3,4,5].forEach(n=>console.log(n));

//// ForEach lengths
["apple","banana","kiwi"].forEach(w=>console.log(w.length));

//// Reduce sum
console.log([1,2,3,4,5].reduce((a,n)=>a+n,0));

//// Reduce concat
console.log(["JS","is","fun"].reduce((a,w)=>a?a+" "+w:w,""));

//// Some even
console.log([1,3,5,7,8].some(n=>n%2===0));

//// Some long
console.log(["apple","banana","kiwi"].some(w=>w.length>5));

//// Every even
console.log([2,4,6,8,10].every(n=>n%2===0));

//// Every long
console.log(["giraffe","elephant","rhino"].every(w=>w.length>5));

//// Find first even
console.log([1,3,5,7,8].find(n=>n%2===0));

//// Find first long
console.log(["apple","banana","kiwi"].find(w=>w.length>5));

//// FindIndex even
console.log([1,3,5,7,8].findIndex(n=>n%2===0));

//// FindIndex long
console.log(["apple","banana","kiwi"].findIndex(w=>w.length>5));

//// Promise delay
function delayP(ms){ return new Promise(r=>setTimeout(r,ms)); }
delayP(1500).then(()=>console.log("Hello JS!"));

//// Promise chain
function fetchP(){ return new Promise(r=>setTimeout(()=>r({ok:true,data:{id:2}}),250)); }
fetchP().then(d=>console.log("Data:",d));

//// Error handling
function fetchUser(u){ return new Promise((r,rej)=>setTimeout(()=>{ if(u.age==null) rej(new Error("No age")); else r(u); },250)); }
fetchUser({name:"Nia",age:27}).then(u=>console.log("OK:",u)).catch(e=>console.log("Err:",e.message));
fetchUser({name:"NoAge"}).then(u=>console.log("OK:",u)).catch(e=>console.log("Err:",e.message));

//// Simulate request
function getWeather2(fail=false){ return new Promise((r,rej)=>{ setTimeout(()=>{ if(fail) rej(new Error("Net error")); else r({city:"Lahore",temp:36}); },500); }); }
getWeather2().then(w=>console.log("Weather:",w)).catch(e=>console.log("Fail:",e.message));
getWeather2(true).then(w=>console.log("Weather:",w)).catch(e=>console.log("Fail:",e.message));

//// Async simple
async function sayHi(){ await delayP(1500); console.log("Hi JS!"); }
sayHi();

//// Async/await fetch
async function getUserA(){ try{ const u=await fetchUser({name:"Zoe",age:24}); console.log("Await user:",u); }catch(e){ console.log("Err:",e.message); } }
getUserA();

//// Fetch & process
function fetchUsr(){ return new Promise(r=>setTimeout(()=>r({id:3,name:"Mason"}),200)); }
function fetchPostsA(uid){ return new Promise(r=>setTimeout(()=>r([{id:1,userId:uid,title:"Post A"}]),200)); }
async function getUsrPosts(){ const u=await fetchUsr(); const p=await fetchPostsA(u.id); console.log("user",u,"posts",p); }
getUsrPosts();

//// Async/await error
function fetchUsr2(found=true){ return new Promise((r,rej)=>setTimeout(()=>found?r({id:10}):rej(new Error("Not found")),200)); }
async function getUsrInfo(){ try{ const u=await fetchUsr2(false); console.log("User:",u); }catch(e){ console.log("Error:",e.message); } }
getUsrInfo();

//// Simulate API
function apiCall2(lbl){ return new Promise((r,rej)=>{ const d=Math.floor(Math.random()*500)+100; setTimeout(()=>{ if(Math.random()<0.9) r(`${lbl} done ${d}ms`); else rej(new Error(`${lbl} fail`)); },d); }); }
async function getAllData(){ try{ console.log(await apiCall2("CallA")); console.log(await apiCall2("CallB")); console.log(await apiCall2("CallC")); }catch(e){ console.log("API err:",e.message); } }
getAllData();
