// src/components/Calculator.js
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import * as math from 'mathjs';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const [isScientificMode, setScientificMode] = useState(false); // Nuevo estado

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const evaluatedResult = math.evaluate(input);
                setResult(evaluatedResult);
                setInput(evaluatedResult.toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult(0);
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    const toggleScientificMode = () => {
        setScientificMode((prevMode) => !prevMode);
    };

    const handleScientificButtonClick = (func) => {
        setInput((prevInput) => prevInput + func + '(');
    };

    return (
        <div className={`calculator ${isScientificMode ? 'scientific-mode' : ''}`}>
            <Display value={input || result} />
            <div className="buttons">
                <Button value="7" onClick={handleButtonClick} />
                <Button value="8" onClick={handleButtonClick} />
                <Button value="9" onClick={handleButtonClick} />
                <Button value="/" onClick={handleButtonClick} />
                <Button value="4" onClick={handleButtonClick} />
                <Button value="5" onClick={handleButtonClick} />
                <Button value="6" onClick={handleButtonClick} />
                <Button value="*" onClick={handleButtonClick} />
                <Button value="1" onClick={handleButtonClick} />
                <Button value="2" onClick={handleButtonClick} />
                <Button value="3" onClick={handleButtonClick} />
                <Button value="-" onClick={handleButtonClick} />
                <Button value="0" onClick={handleButtonClick} />
                <Button value="." onClick={handleButtonClick} />
                <Button value="=" onClick={() => handleButtonClick('=')} />
                <Button value="+" onClick={handleButtonClick} />
                <Button value="C" onClick={handleButtonClick} />
                <Button value="Sci" onClick={toggleScientificMode} />
                {isScientificMode && (
                    <>
                        <Button value="sin" onClick={() => handleScientificButtonClick('sin')} />
                        <Button value="cos" onClick={() => handleScientificButtonClick('cos')} />
                        <Button value="tan" onClick={() => handleScientificButtonClick('tan')} />
                        <Button value="^" onClick={() => handleButtonClick('^')} />
                        <Button value="log" onClick={() => handleScientificButtonClick('log')} />
                        <Button value="sqrt" onClick={() => handleScientificButtonClick('sqrt')} />
                        <Button value="(" onClick={() => handleButtonClick('(')} />
                        <Button value=")" onClick={() => handleButtonClick(')')} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Calculator;
