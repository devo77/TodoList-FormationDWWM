import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    // Remplace la BDD
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
    },
    {
        slug: "about-test",
        title: "Test",
        description:
          "Texte du test",
      },
  ];

  const { slug } = useParams(); // La fonction useParams() compile les données par slug pour les reconnaître
  const aboutContent = aboutData.find((item) => item.slug === slug); // aboutData.find((item) => cherche s'il y a une correspondance entre le slug (lien) cliqué, et un slug existant. Si oui, elle enregistre le slug correspondant dans "const aboutContent"
  const { title, description } = aboutContent; // const { title, description } => va chercher les infos depuis "aboutContent" et les sépare pour pouvoir faire l'affichage HTML séparément "   {>title}{description}"

  //console.log(useParams());

  return (
    <div className="main__content">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
  );
};

export default SinglePage;
