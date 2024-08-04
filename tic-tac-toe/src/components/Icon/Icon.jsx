import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
//Optimise code {to not render all the icons, only render one icon which i clicked}
import {memo} from  'react'
import React from "react";

function Icon({ name }){
  if (name=="circle") {
    return <FaRegCircle />
  }else if (name == "cross") {
    return <FaTimes />
  }else{
    return <FaPen />
  }
}

export default memo(Icon);