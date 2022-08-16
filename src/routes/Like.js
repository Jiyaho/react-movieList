import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Like () {
    const [like, setLike] = useState();
    
    console.log("like page");
    return (
        <div>
            <h3>Like page</h3>
        </div>
    );
};

export default Like;