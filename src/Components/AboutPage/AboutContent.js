import classes from "./AboutContent.module.css";
import {BsGithub,BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs";


const socialMediaIcons=[
    {
        id:1,
        icon:BsGithub
    },
    {
        id:2,
        icon:BsFacebook
    },
    {
        id:3,
        icon:BsInstagram
    },
    {
        id:4,
        icon:BsLinkedin
    }
]

//This data must be fetched from the backend through API
const coreTeamData=[
    {
        id:1,
        name:"Bishal Kharal",
        role:"Co-founder",
        facebook:"https://github.com/kbshal",
        instagram:"https://github.com/kbshal",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/49745633?v=4"
    },
    {
         
        id:2,
        name:"Prabesh Bista",
        role:"Lead Frontend and Flutter Developer",
        facebook:"https://github.com/kbshal",
        instagram:"https://github.com/kbshal",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4"
    
    },
    {
        id:3,
        name:"Bishal Kharal",
        role:"Co-founder",
        facebook:"https://github.com/kbshal",
        instagram:"https://github.com/kbshal",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/49745633?v=4"
    },
    {
         
        id:4,
        name:"Prabesh Bista",
        role:"Lead Frontend and Flutter Developer",
        facebook:"https://github.com/kbshal",
        instagram:"https://github.com/kbshal",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4"
    
    }
]


const AboutContent=()=>{
    return (
        <div className={classes.container}>
                <div className={classes.headerBox}><h1>Our Core<span> Team</span></h1></div>
                <div className={classes.insideBox}>
                    {
                        coreTeamData.map((item)=>{
                            return <div key={item.id} className={classes["member-Box"]}>
                                    <img className={classes.img} src={item.imageURL} alt={item.name}/>
                                    <div className={classes.teamheaderBox}>
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className={classes.roleBox}>
                                        <span>{item.role}</span>
                                    </div>
                                    <div className={classes.socialMediaBox}>
                                        {
                                            socialMediaIcons.map((icon)=>{
                                                return <div className={classes.iconBox} key={icon.id}>
                                                    <icon.icon/>
                                                </div>
                                            })
                                        }
                                    </div>
                            </div>
                        })
                    }
                </div>
        </div>
    )
}

export default AboutContent;