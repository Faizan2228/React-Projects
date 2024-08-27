
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
    
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

    
    useEffect(() => {
        Axios.get(
            `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR`
        ).then((res) => {
            setCrypto(res.data.coins);
        });
    }, []);

    return (
        <div className="App">
            <h1>All Cryptocurrencies</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        <td>Available Supply</td>
                        <td>Volume(24hrs)</td>
                    </tr>
                </thead>
                {/* Mapping all the cryptos */}
                <tbody>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td className="rank">{val.rank}</td>
                                        <td className="logo">
                                            <a href={val.websiteUrl}>
                                                <img src={val.icon} alt="logo" width="30px" />
                                            </a>

                                            <p>{val.name}</p>

                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        <td>₹{val.marketCap}</td>
                                        <td>₹{val.price.toFixed(2)}</td>
                                        <td>{val.availableSupply}</td>
                                        <td>{val.volume.toFixed(0)}</td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
