import { useEffect, useState } from "react";

export default function SpentTime(){
    const [spentTime, setSpentTime] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setSpentTime((prev) => prev + 0.5);
        }, 1000);
    }, []);

    return(
        <span>
            Spent Time: {spentTime}s
        </span>
    );
};