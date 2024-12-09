import { useState } from "react";
export default function LikeBtn() {

    let [Like, setInLike] = useState(false);
    let [count, setCounts] = useState(0);

    let styles = { color: "red" };

    let ToggleBtn = () => {
        setInLike(!Like);
        setCounts(count += 1);
    };

    return (
        <div>
            <h1>Count:{count}</h1>
            <p onClick={ToggleBtn}>
                {Like ? (<i className="fa-solid fa-heart" style={styles}></i>) : (<i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    );
}