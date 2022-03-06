import {React, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Logo1.jpeg";
import Tasks from "./Tasks";
import StepNavigation from "./StepNavigation";

export default function TaskDetails(){

    const stepsArray = ["Describe your task", "Browse Taskers & prices", "Choose date & time", "Confirm details"];
    const [currentStep, setCurrentStep] = useState(1);
    const updateCurrentStep = (step)=>{
        setCurrentStep(step);
    }

    const location = useLocation();
    const data = location.state;

    return <>
    <div>
        <div className="taskDetailsHeader bg-white px-5">
            <div className="d-flex justify-content-start mx-5">
                <Link to="/" className="logo mx-5 my-4"><img src={logo} alt="Logo"></img></Link>
                <div className="m-5">
                    <StepNavigation stepsArray={stepsArray} currentStep={currentStep} updateCurrentStep={updateCurrentStep}/>
                </div>
            </div>
            <hr style={{height: 3}}/>
            <p className="text-center"><i className="bi bi-journal-plus"></i> Tell us about your task. We use these details to show Taskers in your area who fit your needs.</p>
        </div>
        <div className="container my-5 px-5">
            <h5>{data.taskName}</h5>
            <Tasks taskName={data.taskName}/>
        </div>
    </div>
    </>
}