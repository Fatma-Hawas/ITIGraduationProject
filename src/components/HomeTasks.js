import React from "react";
import { Link } from "react-router-dom";

export default function HomeTasks(){

    return <>
    <div className="container text-center m-5">
        <Link to={{pathname:"/taskDetails", state:{taskName:"Mounting"}}} className="btn btn-primary px-4 py-2 m-1">Mounting</Link>
        <Link to={{pathname:"/taskDetails", state:{taskName:"Furniture Assembly"}}} className="btn btn-primary px-4 py-2 m-1">Furniture Assembly</Link>
        <Link to={{pathname:"/taskDetails", state:{taskName:"Help Moving"}}} className="btn btn-primary px-4 py-2 m-1">Help Moving</Link>
        <Link to={{pathname:"/taskDetails", state:{taskName:"Cleaning"}}} className="btn btn-primary px-4 py-2 m-1">Cleaning</Link>
        <Link to={{pathname:"/taskDetails", state:{taskName:"Delivery"}}} className="btn btn-primary px-4 py-2 m-1">Delivery</Link>
        <Link to={{pathname:"/taskDetails", state:{taskName:"Home Repairs"}}} className="btn btn-primary px-4 py-2 m-1">Home Repairs</Link>
    </div>
    </>
}