import React from 'react';
import '../css/About.css';

//About page used to explain the website
function About() {
    return (
        <div className="about">
            <h1>À propos de ce site...</h1>
            <p>
                Ce site est une application permettant de suivre l'évolution de vos candidatures. <br/><br/>
                Elle peut être utilisée dans différents contextes, tels que les candidatures à des emplois, des écoles, des formations, etc. <br/><br/>
                Vous pouvez créer une candidature en saisissant le nom de la structure, l'objet de la candidature, une date de candidature, le lieu de l'offre et le lien pour postuler. <br/><br/>
                Ensuite, vous pouvez organiser chaque candidature dans des colonnes en fonction de l'état de la réponse, en les déplaçant à votre guise, ou même les supprimer. <br/><br/>
                Vos candidatures seront ensuite sauvegardées en local sur votre appareil !
            </p>
            <p>Auteur : Jovany Hochart</p>
        </div>
    )
}

export default About;
