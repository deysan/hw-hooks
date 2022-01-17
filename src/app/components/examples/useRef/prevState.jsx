import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [currentState, setCurrentState] = useState("false");

    const toggleCurrentState = () => {
        setCurrentState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    useEffect(() => {
        prevState.current = currentState;
    }, [currentState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State: {prevState.current}</p>
            <p>current State: {currentState}</p>
            <button className="btn btn-primary" onClick={toggleCurrentState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
