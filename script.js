// Print Odd number in an array using anonymous function

const odd = [1,2,3,4,5,6,7,8,9];
const odd1 = [];

odd.forEach(function(n){
    if(n % 2 != 0){
        odd1.push(n);
    }
});
console.log(`${odd1}`);

// // Print Odd number in an array using IIFE function

(function display(odd=[])
{
            let s1=[];
            for(var i in odd)           
                {
                           if(odd[i]%2!=0)    
                             {
                                         s1.push(i);
                              }

                 }
        console.log(`${s1}`);  

 })([2,3,4,5,6,7,8,9]); 



 // convert all the strings to title caps in a string using Anonymous function

 let title = function(string){
    var caps = string.toLowerCase().split(" ");
    for (var i=0;i<caps.length;i++){
        caps[i] = caps[i][0].toUpperCase() + caps[i].slice(1);
    }
    console.log(caps.join(" "));
 }
 title("Hi Friends! I'm Santy");

 // convert all the strings to title caps in a string using IIFE function

 (function caps(n){
    let caps1 = n.toLowerCase().split(" ");
    for(i=0;i<caps1.length;i++){
        caps1[i] = caps1[i][0].toUpperCase() + caps1[i].slice(1);
    }
    console.log(caps1.join(" "));
 })("Hi Friends! I'm Santy");



// sum of all number in an array using anonymous function

const array = [1,2,3,4,5];

[array].forEach(function(m){
    var s = 0;
    for(i=0;i<m.length;i++){
        s = s + m[i];
    }
    console.log(`${s}`);
});

// sum of all number in an array using IIFE function

(function sum(n){
    var s = 0;
    for(i=0;i<n.length;i++){
        s = s + n[i];
    }
    console.log(`${s}`);  
 })([1,3,5,7]);




// return all prime numbers in an array using anonymous function

const primeNum = [1,2,3,4,5,6,7,8,9,10,11];

[primeNum].forEach(function(n){
let count
let s1=""
for( var i=0;i<primeNum .length; i++ )    
 {
    count=0
     for(var j=1;j<=primeNum[i];j++)  
     {
  if(primeNum[i]%j==0)    
 {  
 count=count+1   
 }
 }
  if(count==2)            
{                            
s1=s1+" " +primeNum[i]
}
}
console.log(`Prime numbers in given array are:  ${s1}`) ;                   
});
 	
// return all prime numbers in an array using IIFE function

(function prime(numbers=[]){   
let count;
let s1="";
for( var i=0;i<numbers .length; i++ )
{
count=0 
 for(var j=1;j<=numbers[i];j++)
{ if(numbers[i]%j==0)
{  
 count=count+1   
}
}
if(count==2)            
{                          
 s1=s1+" " +numbers[i]
 }
}
console.log(`Prime Numbers in given array are: ${s1}`) 
})([2,3,4,5,6,7,8,9,10,11]);


// return all the palindromes in an array using anonymous function

var palindrome=function(a){
var res="";
var ans="";
for(i=0;i<a.length;i++)
{
res+=a[i];
var count=0
for(j=0;j<res.length;j++)
{
if(res[j]===res[((res.length-1)-j)])
{
count++
}
}
if(count===res.length)
{
ans+=res+" "
}
res="";
}
return ans;
}
console.log(palindrome(["santy","madam","did","santa","car"]));

// // return all the palindromes in an array using IIFE function

(function palindromes(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
    res+=a[i];
    var count=0
    for(j=0;j<res.length;j++)
    {
    if(res[j]===res[((res.length-1)-j)])
    {
    count++
    }
    }
    if(count===res.length)
    {
    ans+=res+" "
    }
    res="";
    }
    console.log(ans);  
})(["santy","did","mam","thalapathy"]);


//rotate an array by k times using anonymous

var rotate=function(a,k){
n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],2));

////rotate an array by k times using IIFE

(function rotate(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
})([1,2,3,4,5],3); 


//return median of two sorted arrays of the same size using anonymous

var arraySort=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }

     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;

}
console.log(arraySort([1,2,3,7],[4,5,6,8]));

//return median of two sorted arrays of the same size using anonymous

(function medianSort(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }

     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);

}) ([1,2,3,7],[4,5,6,8]); 


// remove duplicates from an array using anonymous

var remove=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;

}
console.log(remove([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));

// remove duplicates from an array using IIFE

(function removeDup(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);

})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);



// print Odd numbers using arrow functions

let printOdd = (n=[]) => {
    let s1="";
    for(var i in n){
        if(n[i]%2!=0){
        s1=s1+" "+n[i]
    }
                          }
                 console.log(`odd numbers are :${s1}`)  
}
printOdd([1,2,3,4,5,6,7,8,9]);

//convert all the strings to title caps in a string array

let titleCap = (string1) => {
    var caps = string1.toLowerCase().split(" ");
        for (var i=0;i<caps.length;i++){
            caps[i] = caps[i][0].toUpperCase() + caps[i].slice(1);
        }
        console.log(caps.join(" "));
}
titleCap("Hello Frds This is your Santy");

// return all prime numbers in an array using arrow function

let primeAll = (n=[]) => {
    let count
    let s1=""
    for( var i=0;i<primeAll.length; i++ )    
     {
        count=0
         for(var j=1;j<=primeAll[i];j++)  
         {
      if(primeAll[i]%j==0)    
     {  
     count=count+1   
     }
     }
      if(count==2)            
    {                            
    s1=s1+" " +primeAll[i]
    }
    }
    console.log(`Prime numbers in given array are:  ${s1}`) ;
}
primeAll([1,2,3,4,5,6,7,8,9]);

// sum of all number in an array using arrow function

let sumOf = (n=[]) => {
    var s = 0;
        for(i=0;i<n.length;i++){
            s = s + n[i];
        }
        console.log(`${s}`);
}
sumOf([1,2,3,4,5]);

// return all the palindromes in an array using arrow function

let palindromeAll = (n=[]) => {
var res="";
var ans="";
for(i=0;i<n.length;i++)
{
res+=n[i];
var count=0
for(j=0;j<res.length;j++)
{
if(res[j]===res[((res.length-1)-j)])
{
count++
}
}
if(count===res.length)
{
ans+=res+" "
}
res="";
}
console.log(ans);
}
palindromeAll(["santy","madam","thalapathy"]);
