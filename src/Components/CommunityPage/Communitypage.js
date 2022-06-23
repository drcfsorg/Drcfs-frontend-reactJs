import React from "react";
import CommunityDescription from "./CommunityDescription";
import CommunityPerks from "./CommunityPerks";


const CommunityPage=()=>{
    return(
        <React.Fragment>
            <CommunityDescription/>
            <CommunityPerks/>
        </React.Fragment>
    )
}

export default CommunityPage;