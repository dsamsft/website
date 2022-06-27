import React from 'react';
import ConferenciaImageUrl from '@site/static/img/Conferencia.jpg';

export default function HomepageFeatures() {
  return (     
      <div class="indexText">
        I work at Microsoft as Localization Program Manager for Spanish & Portuguese. I was born and raised in Costa Rica. I moved to Washington, USA in 2018. I joined Microsoft in 2015. Before joining Microsoft, I was a <a href="https://mvp.microsoft.com/en-us/PublicProfile/5000234" target="_blank">Microsoft Most Valuable Professional</a>, now I'm part of the MVP Reconnect program. I graduated from Computer Systems Engineer and finishing a Master degree for Information Technology Management. Most of my experience is about Software Development and Collaboration Platforms. I am Microsoft Certified Professional and Trainer, some of my certifications are: Azure Developer Associate, Azure DevOps Engineer Expert and Azure Fundamentals including AI & Data.
        <img src={ConferenciaImageUrl} alt="David Sanchez giving a conference about DevOps"/>
        <p class="indexFooter">I hope you find the information on this website helpful and it can help you to learn and achieve more. Thank you for visiting.</p>
      </div>
  );
}