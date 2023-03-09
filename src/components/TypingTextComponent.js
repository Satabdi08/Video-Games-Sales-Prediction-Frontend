import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
function TypingTextComponent() {
    return(
        <div className="d-flex justify-content-center mt-2">
            <div className="mr-1">{`USING THIS FORM PREDICT`}</div>
            <Typist avgTypingDelay={100} stdTypingDelay={28}>
                <span>{`SALES FOR A CONSOLE`}</span>
                <Typist.Backspace count={19} delay={400} />
                <span>{`WHICH CATEGORY GENERATES HIGHEST REVENUE`}</span>
                <Typist.Backspace count={40} delay={400} />
                <span>{`THE IMPACT OF RATINGS ON THE SALES`}</span>
            </Typist>  
        </div>
    )
}

export default TypingTextComponent;