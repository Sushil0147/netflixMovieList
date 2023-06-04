import React from 'react';
import './index.css';
import Card from './Cards';
import NetflixData from './NetflixData';

// function ncard(val){
//   return (
//       <Card imgsrc={val.imgsrc} 
//           title={val.title}
//           sname={val.sname}
//           link={val.link}
//       />
//   )
// }

// Normal Function Example-1
  // function myName(sushil){

  // }

  // Fat Arrow Function
  // const myName = (Sushil) =>{

  // }

// Normal Function Example-2
  // function add(a,b){
        // return a+b;
  // }

  // Fat Arrow Function
  // const add = (a,b) =>a+b;




const App = () =>(
    <>
      <h1 className='heading_style'>List of Top 5 Netflix Series in 2020</h1>
      {/* {NetflixData.map(ncard)}; */}
      {NetflixData.map((val)=>{
        return (
        <Card 
            key={val.id}
            imgsrc={val.imgsrc} 
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
     )})};
    </>
);
export default App;