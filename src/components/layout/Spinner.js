import { Fragment } from "react";
import spinner from "./spinner.gif"

const Spinner = () => 
            <Fragment>
                <img src={spinner} style={{width:'200px',margin:'auto',display:'block'}}  alt="" />
            </Fragment>

export default Spinner;