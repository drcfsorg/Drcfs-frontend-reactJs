import classes from "./AboutContent.module.css";
import {BsGithub,BsLinkedin} from "react-icons/bs";


const socialMediaIcons=[
    {
        id:1,
        icon:BsGithub
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
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/49745633?v=4"
    },
    {
         
        id:2,
        name:"Prabesh Bista",
        role:"Developer",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/83439329?v=4"
    
    },
    {
        id:3,
        name:"Bishal Kharal",
        role:"Co-founder",
        github:"https://github.com/kbshal",
        imageURL:"https://avatars.githubusercontent.com/u/49745633?v=4"
    },
    {
         
        id:4,
        name:"Prabesh Bista",
        role:"Developer",
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
                            return <div className={classes["member-Box"]} key={item.id}>
                                   <div className={classes.imgBox}>
                                    <img className={classes.img} src={item.imageURL} alt={item.name}/>
                                    <div className={classes.hoverBox}>
                                        {
                                            socialMediaIcons.map((item)=>{
                                                return <div key={item.id} className={classes.iconBox}>
                                              <item.icon/>
                                                </div>
                                            })
                                        }
                                    
                                    </div>
                                   </div>
                                    <div className={classes.teamheaderBox}>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className={classes.roleBox}>
                                        <span>{item.role}</span>
                                    </div>
                            </div>
                        })
                    }
                </div>
        </div>
    )
}

export default AboutContent;