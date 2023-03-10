import React from 'react'
import Case from '../assets/images/Case.png';
import Cooler from '../assets/images/Cooler.png';
import GPU from '../assets/images/GPU.png';
import Processor from '../assets/images/Processor.png'
import PSU from '../assets/images/PSU.png';
import Ram from '../assets/images/Ram.png';
import SSD from '../assets/images/SSD.png';
import MotherBoard from '../assets/images/MotherBoard.png';
import '../css/ComponentsPC.css';
import { Link } from 'react-router-dom';

const ComputerComponents = () => {
    const components = [
        { id: 1, title: "CPUs Processor", subtitle1: "AMD", subtitle2: "Intel", image:Processor },
        { id: 2, title: "Graphics Card", image:GPU},
        { id: 3, title: "MotherBoards ", subtitle1: "AMD", subtitle2: "Intel ", image:MotherBoard },
        { id: 4, title: "Memory ", subtitle1: "RAM", subtitle2: "Storage Device", image:Ram  },
        { id: 5, title: "Coolers  ", subtitle1: "AIO", subtitle2: "Liquid Cooler", image:Cooler  },
        { id: 6, title: "Power Supply ", subtitle1: "Modular", subtitle2: "Non-Moddular", image:PSU  },
        { id: 7, title: "Casing ", subtitle1: "Gaming case", subtitle2: "Normal Cae", image:Case }, 
        { id: 8, title: "Accessories ", subtitle1: "Headphones", subtitle2: "Mouse", image:SSD },
    ]
    return (
        <div className='mainComputer-components'>
            <div className="top-header-components">
                <span style={{borderBottomStyle:"solid" ,fontSize:"40px"}}>COMPUTER COMPONENTS</span>
            </div>
            <hr />
            <div  className="child-components">
            {
                components.map((pro) => (
                    <>
                        
                        <div key={pro.id} className="card-components">
                            <Link to={"/products"}>
                            <div className="left-image">
                               <img  src={pro.image}  alt={pro.title}/>
                            </div>
                            <div className="right-components">
                                <h3>{pro.title}</h3>
                                <p>{pro.subtitle1}</p>
                                <p>{pro.subtitle2}</p>

                            </div>
                            
                            </Link>
                        </div>
                       
                    </>
                ))
            }
             </div>

        </div>
    )
}

export default ComputerComponents