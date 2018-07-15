import React from "react";

const Stocks = props => (
    <div className="stock__info">

        <p className="stock__key"> Stock:<span className="stock__value"> {props.stock}</span></p>

        <p className="stock__key"> Sector: <span className="stock__value"> {props.sector}</span></p>

        <p className="stock__key"> Latest Price: <span className="stock__value"> {props.latestPrice}</span></p>


        <p className="stock__key"> Open Price: <span className="stock__value"> {props.openPrice}</span></p>


        <p className="stock__key"> Close Price<span className="stock__value"> {props.closePrice} </span></p>


        <p className="stock__key"> Low Price:<span className="stock__value"> {props.lowPrice} </span></p>


        <p className="stock__key"> High Price:<span className="stock__value"> {props.highPrice} </span></p>

        <p className="stock__key"> Related News (link):<span className="stock__value"> {props.relatedNews} </span></p>


        <p className="stock__error">{props.error}</p>
    </div>
);

export default Stocks;


