const CalculatorBody = () =>{
    return(
    <div className="main-container">
    <div className="result-container">
        <p className="result-display"></p>
    </div>
    <div className="bottom-container">
        <button className="clear">C</button>
        <button className="delete">DEL</button>
        <button className="power operator">^</button>
        <button className="divide operator">/</button>
        <button className="number n7">7</button>
        <button className="number n8">8</button>
        <button className="number n9">9</button>
        <button className="multiply operator">x</button>
        <button className="number n4">4</button>
        <button className="number n5">5</button>
        <button className="number n6">6</button>
        <button className="substract operator">-</button>
        <button className="number n1">1</button>
        <button className="number n2">2</button>
        <button className="number n3">3</button>
        <button className="sum operator">+</button>
        <button className="placeholder">TH</button> 
        <button className="number n0">0</button>
        <button className="decimal">.</button>
        <button className="equals">=</button>
    </div>
    </div>
    );
};

export default CalculatorBody;