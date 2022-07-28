import { communityAction } from "./community-slice";

const fetchCommunityInfo=()=>{
    return async(dispatch)=>{
        
        const fetchData=async()=>{
            const response=await fetch("https://drcfsapi.herokuapp.com/api/getinfo/communitymembers/",{
            });
            if(!response.ok){
                throw new Error("Could not fetch the Data");
            }
            const jsonData=await response.json();
        
            const arrItems=[];
            jsonData.map((data)=>{
                return arrItems.push({
                    name:data.name,
                    role:data.role,
                    github:data.github,
                    profileImage:data.profile_pic,
                    linkedin:data.facebook
                });
            });

            

            return arrItems;

        }

        try{
           
            const data=await fetchData();
            dispatch(
                communityAction.replaceProductList({
                    items:data
                }),
            )

        
        }catch(err){
            console.log(err);   
        }
    }
}

export default fetchCommunityInfo;