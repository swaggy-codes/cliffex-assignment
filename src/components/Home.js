import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
    const history = useHistory();
    const items = ["high", "cruel", "nappy", "sable", "mine", "vagabond", "sassy", "steer", "argument", "unaccountable", "tie", "middle"];
    const [checkedState, setCheckedState] = React.useState(
        new Array(items.length).fill(false)
    );

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        console.log("updatedCheckedState", updatedCheckedState);
        setCheckedState(updatedCheckedState);
    }
    const favList = items.filter((item, index) => {
        if (checkedState[index]) {
            return item;
        }
    })
    // console.log("newArr", newArr)

    const listNames = items.map(((item, index) =>
        <div className="listView">
            {item}<input onChange={() => handleChange(index)} type="checkbox"
                id="topping" name="topping" value={item} />
        </div>));
    return (
        <div className="homeTab">{console.log("AAYA STATE", checkedState)}
            <h3>This is Home Tab with all the items. </h3>
            <div className="checkList">{listNames}</div>
            <button className="favButton" onClick={() => { history.push({
                pathname : '/Favourites',
                state : favList
            }) }}>Go To Favourites!</button>
        </div>
    )
};

export default Home;