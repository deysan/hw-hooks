import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClickFocus = () => {
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    ref={inputRef}
                    type="email"
                    className="form-control"
                    id="email"
                />
            </div>
            <button className="btn btn-primary" onClick={handleClickFocus}>
                Focus input
            </button>
            <button
                className="btn btn-secondary mx-3"
                onClick={handleClickWidth}
            >
                Edit width input
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
