import { communityAction } from "./community-slice";

const fetchCommunityInfo=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch("https://drcfswebapi.herokuapp.com/api/getinfo/communitymembers/",{
                mode:"no-cors"
            });
            const jsonData=await response.json();
            const arrItems=[];
            jsonData.map((data)=>{
                arrItems.push({
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
                    items:[1,2,3,4,5]
                })
            )
        }catch(err){
            console.log(err);   
        }
    }
}

export default fetchCommunityInfo;