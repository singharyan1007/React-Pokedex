import React from "react";
import './RangeView.css'
function RangeView({value=50,max=100}){
    //Takes default value as 50 and 100 respectively if value not provided
    //Then calculate the percentage value
    const percent=parseInt(value)/parseInt(max)*100;
    const colorClass=percent>=50?'range-view-positive':'range-view-negative';
    return (
        <div className={`range-view w-full bg-[rbga(0,0,0,0.1)] rounded-[100rem] overflow-hidden h-[5px] my-0 mx-[10px] relative ${colorClass}`} style={{'--percent':`${percent}%`}}></div>
    )


}

export default RangeView;