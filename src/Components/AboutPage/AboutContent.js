import classes from "./AboutContent.module.css";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import { useSelector } from "react-redux/es/exports";


const socialMediaIcons=[
    {
        id:1,
        icon:BsGithub
    },
    {
        id:2,
        icon:BsLinkedin
    }
]

//This data must be fetched from the backend through API
const coreTeamData=[
    {
        id:1,
        name:"Bishal Kharal",
        role:"Co-founder",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/49745633?v=4",
        linkedin:"https://www.youtube.com/"
    },
    {
         
        id:2,
        name:"Prabesh Bista",
        role:"Developer",
        github:"https://github.com/PrabeshPP",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4",
        linkedin:"https://www.youtube.com/"
    
    },
    {
        id:3,
        name:"Bishal Kharal",
        role:"Co-founder",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/49745633?v=4",
        linkedin:"https://www.youtube.com/"
    },
    {
         
        id:4,
        name:"Prabesh Bista",
        role:"Developer",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4",
        linkedin:"https://www.youtube.com/"
    
    },
    {
         
        id:5,
        name:"Prabesh Bista",
        role:"Developer",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4",
        linkedin:"https://www.youtube.com/"
    
    },
    {
         
        id:6,
        name:"Prabesh Bista",
        role:"Developer",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4",
        linkedin:"https://www.youtube.com/"
    
    },
    {
         
        id:7,
        name:"Prabesh Bista",
        role:"Developer",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4",
        linkedin:"https://www.youtube.com/"
    
    }
]


const AboutContent=()=>{

    const communityData=useSelector((state)=>state.community);
    const isLoading=communityData.isLoading;
    const communityArray=communityData.communityMembers;


   
    console.log(isLoading)

    return (
        <div className={classes.container}>
                <div className={classes.headerBox}><h1>Our Core<span> Team</span></h1></div>
                <div className={classes.insideBox}>
                    {
                      isLoading===true?<div className={classes.spinner}>
                                
                      </div>  :communityArray.map((data)=>{
                            return <div className={classes["member-Box"]} key={data.name}>
                                   <div className={classes.imgBox}>
                                    <img className={classes.img} src={data.profileImage} alt={data.name}/>
                                    <div className={classes.hoverBox}>
                                      <a className={classes.iconBox} href={data.github} target="_blank"> <BsGithub /></a>
                                       <a className={classes.iconBox} href={data.linkedin} target="_blank"><BsLinkedin /></a>
                                    
                                    </div>
                                   </div>
                                    <div className={classes.teamheaderBox}>
                                        <span>{data.name}</span>
                                    </div>
                                    <div className={classes.roleBox}>
                                        <span>{data.role}</span>
                                    </div>
                            </div>
                        })
                    }
                </div>
        </div>
    )
}

export default AboutContent;