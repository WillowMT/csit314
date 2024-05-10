import Link from "next/link";

//search property by location from agent side
export default function inputSearchProperty() {
    return (
        <div className="flexContainer">
            <div className="topElement">
                <div className="crave-search-bar">
                    <input className="searchbox" type="text" placeholder="Search Location"/>
                    <button className="custom-button">Search</button>
                </div>
            </div>
        </div>
    )
}