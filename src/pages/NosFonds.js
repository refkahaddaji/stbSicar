import React from "react";
import Investisseur from "./Investisseur";
import "./res.css";

const NosFonds = () => {
  return (
    <>
      <section class="sponsors section bg-invest overlay-white">
        <Investisseur />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h3>OPTIMISEZ VOTRE FISCALITE</h3>
                <p>
                  Les investisseurs qui désirent optimiser leur fiscalité
                  peuvent confier tout ou partie de leurs bénéfices imposables à
                  la STB SICAR sous forme de fonds géré.
                </p>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              {/*    <section className="Pol-in"> */}
              <div className="regflex"style={{ justifyContent: "center", display: "flex" }}>
                <img src="img/saving.svg" alt="loading" className="img" /* width="300px" */ />
                <div >
                  <p >
                    {" "}
                    La règlementation en vigueur leur permet d’opter pour l’un
                    des schémas suivants :{" "}
                  </p>
                  <div class="reglementation" style={{ display: "flex", flexWrap: "nowrap", justifyContent:"space-around" }}>
                    <a class="card" href="#!">
                      <div
                        class="front"
                        /* style={{ backgroundImage: "url(img/finance.jpg)" }} */
                      >
                        <p>
                          100% des revenus ou bénéfices imposables sans minimum
                          d&#39;impôt.
                        </p>
                      </div>
                      <div class="back">
                        
                          <p>
                            Déduction des revenus ou bénéfices imposables sans
                            minimum d&#39;impôtDéduction totale sur la base
                            d&#39;un engagement de la STB SICAR d’employer 75%
                            de montant déposés dans des ZDR ou agricole.
                          </p>
                          {/*   <button class="button">Click Here</button> */}
                        
                      </div>
                    </a>
                    <a class="card" href="#!">
                      <div
                        class="front"
                        /* style={{ backgroundImage: "url(img/finance.jpg)" }} */
                      >
                        <p>
                          35% des revenus ou bénéfices imposables avec minimum
                          d&#39;impôt
                        </p>
                      </div>
                      <div class="back">
                       
                          <p>
                            Déduction des revenus ou bénéfices réinvestis auprès
                            de la STB SICAR , sur la base d’un engagement
                            d’emploi de 65% dans des projets définis par la
                            règlementation.
                          </p>
                          {/*   <button class="button">Click Here</button> */}
                        
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
            <div class="section-title">
            <h4>Délai </h4>
<p>Les investisseurs bénéficient de l’avantage fiscal l’année de libération du fonds.
Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de libération.
</p>
<br></br>
<h4>Blocage des fonds</h4>
<p>Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à partir du 1er janvier
     de l’année qui suit celle du dépôt des fonds.</p>
     <br></br>
     <h4>Rémunération </h4>
<p>
    Le bailleur de fonds bénéficiera également conformément à la convention Fonds géré :
-	De la rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation
-	Du produit des intérêts des OCA/CCA souscrits
-	Des revenus du portefeuille d’investissement
-	Des dividendes distribués
</p>
<br></br>
<h4>Autre avantage </h4>
<p>
Est déductible du bénéfice imposable, la plus-value de cession d’actions et des parts 
sociales réalisées. 
</p>
<br></br>
              </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default NosFonds;
