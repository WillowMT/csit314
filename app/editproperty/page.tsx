import Link from "next/link";

// edit property info from agent side
export default function editPropertyListings() {
    return (
        <div className="flexContainer">
            <div className="first-Element">
                <h2>Edit Porperty</h2>
            </div>
            <div className="middleColumn">
                <div className="leftColumn">
                    <div>Property Name:</div>
                    <input type="text" placeholder="Name"></input>
                    <br></br>
                    <div>Property Location:</div>
                    <input type="text" placeholder="Location"></input>
                    <br></br>
                    <div>Property Price:</div>
                    <input type="text" placeholder="Price"></input>
                    <br></br>
                    <div>Property Type:</div>
                    <input type="text" placeholder="type"></input>
                    <br></br>
                </div>
                <div className="rightColumn">
                    <div>Propery Measurement: </div>
                    <input type="text" placeholder="Measurements"></input>
                    <br></br>
                    <div>Number of rooms: </div>
                    <input type="text" placeholder="No.rooms"></input>
                    <br></br>
                    <div>Number of bathrooms: </div>
                    <input type="text" placeholder="No.baths"></input>
                    <br></br>
                    <div>Property Image: </div>
                    <input type="text" placeholder="URL link"></input>
                    <br></br>
                    <div>Property description: </div>
                    <textarea placeholder="Description"></textarea>
                    <br></br>
                </div>
            </div>
            <div className="buttons">
                <div className="return">
                    <Link href={"/agentmainpage"}>Return</Link>
                </div>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}