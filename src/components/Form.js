import React from "react";

const Form = props => (
    <form onSubmit={props.getStocks}>
        <input type="text" name="stock" placeholder="Stock SYMBOL..." />
        <button>Get Stock Data</button>
    </form>

);
export default Form;


