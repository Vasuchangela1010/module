import React, { useState } from "react";
import "./Dialog.css";
import loadingGIF from "../IMG/loadingGIF.gif";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
const Dialog = () => {
    const [showGIF, setShowGIF] = useState(false);
    const [showGraph, setShowGraph] = useState(false);
    const series = useSelector(state => state);
    const closeGIF = () => {
        setShowGIF(false);
    };
    const openGIF = () => {
        setShowGIF(true);
        console.log("GIF START");
        setTimeout(closeGIF, 7000);
    };
    const handleGraph = () => {
        setShowGraph((prev) => !prev);
    };
    const option = {
        colors: ["#F44336"],
        markers: {
            colors: ["#FFF", "#E91E63", "#9C27B0"],
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    };
    // const series = [
    //     {
    //         name: "series-1",
    //         data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
    //     },
    // ];
    return (
        <div className="dialog">
            <div className="btn_group">
                <button onClick={openGIF}>7 Sec GIF</button>
                <button onClick={handleGraph}>
                    {showGraph ? "Close Graph" : "Open Graph"}
                </button>
            </div>
            <div>
                {showGIF ? (
                    <img src={loadingGIF} width="200px" height="200px" />
                ) : null}
                {showGraph ? (
                    <Chart
                        width={"100%"}
                        height={300}
                        options={option}
                        type="bar"
                        series={series}
                    />
                ) : null}
            </div>
        </div>
    );
};
export default Dialog;
