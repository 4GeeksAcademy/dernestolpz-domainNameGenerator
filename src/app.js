/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const extensions = [".com", ".net", ".org", ".io"];

  const generateDomainNames = () => {
    const domainNames = [];

    for (let pronouns of pronoun) {
      for (let adjs of adj) {
        for (let nouns of noun) {
          for (let extension of extensions) {
            const domainName = `${pronouns}${adjs}${nouns}${extension}`;
            domainNames.push(domainName);
          }
        }
      }
    }

    return domainNames;
  };

  const generatedDomains = generateDomainNames();
  generatedDomains.forEach(domain => console.log(domain));
};
