import React from 'react'
import  "../css/presentation.css"
import { ImStatsDots} from "react-icons/im";
import { FiUsers  } from "react-icons/fi";
import { FiAward  } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";
import { BiStats } from "react-icons/bi";



const Presentation = () => {
  return (
    <div  className="pres">
<h1>BIENVENU SUR STB SICAR</h1>
<p> La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998. C&#39;est une société d’investissement à
capital risque qui a pour objectif la participation, pour son propre compte ou pour le compte de bailleurs de
fonds au renforcement des opportunités d’investissement et des fonds propres des entreprises. Elle permet
de procurer aux entreprises les fonds nécessaires à leur développement et à leur croissance avec obligation
de sortie. </p>

<h1>NOS CHIFFRES CLES</h1>
<div className='flex'>
    <div className="cadre" id="move-up">
    <FiUsers style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/> 
        <h3 className='h3'> 23 ans </h3>
        <h5 className='h5'>
d experiences
        </h5>
         </div>

         <div className="cadre" id="move-up">
         < BiStats  style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/>
         <h3 className='h3'>128 md</h3>
         <h5 className='h5'>
Sous gestion
 </h5>
  </div>
  <div className="cadre" id="move-up">
  <FiAward style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/>
  <h3 className='h3'>300</h3>
  <h5 className='h5'>
Investissement en portefeuille
 </h5>
  </div>
  <div className="cadre" id="move-up">
  <BiBriefcase style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/>
  <h3 className='h3'> 58</h3>
  <h5 className='h5'>
Fond geres
 </h5>
  </div>
  </div>
  <div className='flex2'>
  <div className="cadre" id="move-up">
    <FiUsers style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/> 
    <h3 className='h3'> 91 </h3>
    <h5 className='h5'>
Sorties integrales realisees
        </h5>
         </div>

         <div className="cadre"id="move-up">
         < BiStats  style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/>
         <h3 className='h3'>24</h3>
         <h5 className='h5'>
regions
 </h5>
  </div>
  <div className="cadre" id="move-up" >
  <FiAward style={{fontSize:"50px",color:"#191970",marginTop:"10px"}}/>
  <h3 className='h3'>1750</h3>
  <h5 className='h5'>
Emploies crees 5 derniers annees
 </h5>
  </div>
  
</div>


 </div>


  )
}

export default Presentation