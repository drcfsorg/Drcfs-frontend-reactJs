import React from "react";
import CommunityDescription from "./CommunityDescription";
import CommunityPerks from "./CommunityPerks";
import TechCommunity from "./TechCommunity";


const CommunityPage=()=>{
    return(
        <React.Fragment>
            <CommunityDescription/>
            <CommunityPerks/>
            <TechCommunity/>
        </React.Fragment>
    )
}

export default CommunityPage;