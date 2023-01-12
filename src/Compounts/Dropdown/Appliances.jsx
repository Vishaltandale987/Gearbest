import React from 'react'

function Appliances() {
  return (
    <div>
    <div style={{ display: "flex" , marginLeft:"2em"}}>
   <div>
     <div style={{ display: "flex", textAlign: "left" ,gap:"1em"}}>
       <div>
         <h1>
           {" "}
           <b>Smart Electronics</b>{" "}
         </h1>
         <h1>Smart Watch</h1>
         <h1>Smart Watch Phone</h1>
         <h1>Smart Wristband</h1>
         <h1>Watch Accessories</h1>
         <h1>Sport Watch</h1>
        
       </div>
       <div>
         <h1>
           {" "}
           <b>Headphones & Earphones</b>{" "}
         </h1>
         <h1>Bluetooth Headphones</h1>
         <h1>Earbud Headphones</h1>
         <h1>Gaming Headphones</h1>
         <h1>Sports Headphones</h1>
         <h1>Headphone Accessories</h1>
         
       </div>
       <div style={{  marginLeft:"2em"}}>
         <h1>
           {" "}
           <b>Hot Brands</b>{" "}
         </h1>
         <h1>Kospet</h1>
         <h1>Lenovo</h1>
         <h1>CORN</h1>
         <h1>KZ</h1>
         <h1>Ticwatch</h1>
       </div>
     </div>

     <div style={{ display: "flex" , textAlign: "left" ,gap:"1em" }}>
       <div>
         <h1>
           {" "}
           <b>Security & Protection</b>{" "}
         </h1>
         <p>Access Control</p>
         <h1>Alarm Systems</h1>
         <h1>Door Intercom</h1>
         <h1>IP Cameras</h1>
         <h1>Smart Doorbells</h1>
       
       </div>
       <div>
         <h1>
           {" "}
           <b>Xiaomi In Consumer Electronics</b>{" "}
         </h1>
         <h1>Xiaomi</h1>
         <h1>Amazfit</h1>
         <h1>Aqara</h1>
         <h1>Haylou</h1>
         <h1>QCY</h1>
       </div>
       <div>
         <h1>
           {" "}
           <b>Other Consumer Electronics</b>{" "}
         </h1>
         <h1>Smart Home</h1>
         <h1>Microphone</h1>
         <h1>Gimbal</h1>
         <h1>Video Game</h1>
         <h1>Speakers</h1>
       </div>
     </div>
   </div>
   <div>
     <img
       src="https://uidesign.gbtcdn.com/GB/image/6592/en-230x420.jpg"
       alt=""
     />
   </div>
 </div>
   
 </div>
  )
}

export default Appliances
