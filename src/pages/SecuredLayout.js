import { Route,Routes, useHistory } from "react-router-dom";
import Header from "../components/shared/Header";
import DisplayDummyData from "./DisplayDummyData";

const SecuredLayout = (props) => {
  //  let history = useHistory();
  console.log("aa")
    return (
        <div>
           <Header/>
          <DisplayDummyData/>
        </div>
    )
};

export default SecuredLayout;
