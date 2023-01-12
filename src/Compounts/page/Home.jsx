import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import HomeCard from "../Compont/HomeCard";
import Wrapper from "../Compont/Wrapper";
import HomeDropdown from "../Dropdown/HomeDropdown";
import Industrial from "../Dropdown/Industrial";
import Cell from "../Dropdown/Cell";
import Appliances from "../Dropdown/Appliances";
import Outdoors from "../Dropdown/Outdoors";
import Health from "../Dropdown/Health";
import Improvement from "../Dropdown/Improvement";
import Drones from "../Dropdown/Drones";
import Garden from "../Dropdown/Garden";
import Motor from "../Dropdown/Motor";
import Men from "../Dropdown/Men";
import Watches from "../Dropdown/Watches";


function Home() {
  const [isHovering, setIsHovering] = useState({
  componet: {},
    state: false,
  });

  const handleMouseOver = (element) => {
    setIsHovering((pre) => {
      return {
        ...pre,
        componet: element,
        state: true,
      };
    });
  };

  const handleMouseOut = () => {
    setIsHovering((pre) => {
      return {
        ...pre,
        componet: "",
        state: false,
      };
    });
  };
  const getRequiredDrodownComponet=()=>{
    if(isHovering.componet === "Home"){
      return <HomeDropdown/>;
    }
    else if(isHovering.componet === "Industrial"){
      return <Industrial/>
    }
    else if(isHovering.componet === "Cell"){
      return <Cell/>
    }
    else if(isHovering.componet === "Appliances"){
      return <Appliances/>
    }
    else if(isHovering.componet === "Outdoors"){
      return <Industrial/>
    }
    else if(isHovering.componet === "Computers"){
      return <Outdoors/>
    }
    else if(isHovering.componet === "Health"){
      return <Health/>
    }
    else if(isHovering.componet === "Improvement"){
      return <Improvement/>
    }
    else if(isHovering.componet === "Drones"){
      return <Drones/>
    }
    else if(isHovering.componet === "Garden"){
      return <Garden/>
    }
    else if(isHovering.componet === "Motor"){
      return <Motor/>
    }
    else if(isHovering.componet === "Men"){
      return <Men/>
    }
    else if(isHovering.componet === "Watches"){
      return <Watches/>
    }
  }
  return (
    <>
      <div style={{ display: "flex", marginLeft: "1em" }}>
        <div
          style={{
            backgroundColor: "black",
            height: "2em",
            width: "15em",
            display: "flex",
            gap: "5em",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4 style={{ paddingLeft: "1em" }}>
            <b>Category</b>
          </h4>
        </div>

        <div
          style={{
            backgroundColor: "yellow",
            height: "2em",
            width: "46em",
            display: "flex",
            gap: "5em",
            paddingLeft: "5em",
          }}
        >
          <Link to="/superdeals">
            <h4 className="link_button">
              <b> SUPER DEALS</b>
            </h4>
          </Link>
          <Link to="/apponly">
            <h4 className="link_button">
              <b> APP ONLY</b>
            </h4>
          </Link>
          <h4 className="link_button">
            <b>NEW ARRIVALS</b>
          </h4>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "1em" }}>
        <div
          style={{  width: "15em", height: "20em" }}
        >
          <div  style={{ color: "black", textAlign:"left" }}>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Home")}
              onMouseOut={handleMouseOut}
            >
              Consumer Electronics
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Industrial")}
              onMouseOut={handleMouseOut}
            >
              Industrial & Scientific
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Cell")}
              onMouseOut={handleMouseOut}
            >
              Cell Phones & Accessories
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Appliances")}
              onMouseOut={handleMouseOut}
            >
              Appliances
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Outdoors")}
              onMouseOut={handleMouseOut}
            >
              Outdoors, Fitness & Sports
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Computers")}
              onMouseOut={handleMouseOut}
            >
              Computers, Tablets & Office
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Health")}
              onMouseOut={handleMouseOut}
            >
              Health & Personal Care
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Improvement")}
              onMouseOut={handleMouseOut}
            >
              Home Improvement & Tools
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Drones")}
              onMouseOut={handleMouseOut}
            >
              Drones, Toys & Hobbies
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Garden")}
              onMouseOut={handleMouseOut}
            >
              Home & Garden
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Motor")}
              onMouseOut={handleMouseOut}
            >
              Motor & Car Electronics
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Men")}
              onMouseOut={handleMouseOut}
            >
              Men's Fashion
            </p>
            <p className="hov"
              onMouseOver={() => handleMouseOver("Watches")}
              onMouseOut={handleMouseOut}
            >
              Watches & Jewelry
            </p>
          </div>
        </div>
        {isHovering.state ? (
          <Wrapper >
            {getRequiredDrodownComponet()}
          </Wrapper>
          // <Component data={isHovering.componet}/>
        ) : (
          <>
            <div className="slideshow"></div>
          </>
        )}
      </div>
      <HomeCard />
    </>
  );
}

export default Home;
