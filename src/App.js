import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Stocks from "./components/Stocks";


class App extends React.Component {
    state = {
        highPrice: undefined,
        stock: undefined,
        lowPrice: undefined,
        closePrice: undefined,
        openPrice: undefined
    }

    getStocks = async (e) => {
        e.preventDefault();
        const stock = e.target.elements.stock.value;

        // const api_call = await fetch(`https://api.iextrading.com/1.0/stock/${stock}/ohlc`);
        const api_call = await fetch(`https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news,chart&range=1m&last=10`);

        const data = await api_call.json();
        if (stock) {
            this.setState({
                stock: data.quote.companyName,
                sector: data.quote.sector,
                latestPrice: data.quote.latestPrice,
                openPrice: data.quote.open,
                closePrice: data.quote.close,
                highPrice: data.quote.high,
                lowPrice: data.quote.low,
                relatedNews: data.news[0].url,
                error: ""
            });
        } else {
            this.setState({
                stock: undefined,
                sector: undefined,
                latestPrice: undefined,
                openPrice: undefined,
                closePrice: undefined,
                lowPrice: undefined,
                highPrice: undefined,
                relatedNews: undefined,
                error: "Please enter the value."
            });
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="title-container col-sm-6 col-md-6 col-lg-6">
                        <Titles/>
                    </div>
                    <div className="form-container col-sm-6 col-md-6 col-lg-6">
                        <Form getStocks={this.getStocks}/>
                        <Stocks
                            stock = {this.state.stock}
                            sector= {this.state.sector}
                            latestPrice= {this.state.latestPrice}
                            openPrice= {this.state.openPrice}
                            closePrice= {this.state.closePrice}
                            lowPrice= {this.state.lowPrice}
                            highPrice= {this.state.highPrice}
                            relatedNews= {<a href={this.state.relatedNews}>{this.state.relatedNews}</a>}
                            error= {this.state.error}
                        />
                    </div>
                </div>
             </div>

        );
    }
};


export default App;