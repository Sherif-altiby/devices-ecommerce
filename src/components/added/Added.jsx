import "./Added.css";
import { useProvider } from "../context/MainContext";


const Added = () => {
 
  const {showAdded , setShowAdded } =useProvider()

  return (
    <>
      <div className= {showAdded ? "added block" : "added"} >
        <div className="over_lay_add"></div>
        <h1> you have arledy adde the item </h1>
      <i onClick={()=>setShowAdded(false)} className="fa-solid fa-xmark"></i>
      </div>
    </>
  );
};

export default Added;
