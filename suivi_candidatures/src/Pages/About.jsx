import React from 'react';
import '../css/About.css';

//About page used to explain the website
function About() {
    return (
        <div className="about">
            <h1>À propos de ce site...</h1>
            <p>
                Ce site est une application permettant de suivre l'évolution de vos candidatures. <br/><br/>
                Cela peut être utilisé pour différents contextes comme des candidatures à des emplois, des écoles, des formations... <br/><br/>
                Vous pouvez créer votre candidature en saisissant un nom correspondant, une date où vous avez postulé, le lieu où ça se passe et le lien pour postuler. <br/><br/>
                Vous pouvez ensuite ranger chaque candidature dans des colonnes selon l'état de la réponse en les glissant à votre guise, ou même les supprimer. <br/><br/>
                Vos candidatures seront ensuite sauvegardés en local sur votre appareil !
            </p>
            <p>Auteur : Jovany Hochart</p>
        </div>
    )
}

export default About;
