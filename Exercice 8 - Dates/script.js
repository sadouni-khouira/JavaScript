
        let date1=new Date('05/01/2019');
        let date2=new Date('05/30/2019');
        let btnGet=document.querySelector('button');
        let resultat=document.querySelector('h1'); 
        btnGet.addEventListener('click',()=>{
                                   let diff=date2.getTime()-date1.getTime();
                                   let msInDay=1000 * 3600 * 24;
                                   resultat.innerText=diff/msInDay;
       /*alert("Aujourd'hui,nou sommes le",date2);
       alert("Mon anniversaire est le",date1);
       alert("Alors,il ne reste plus que ",resultat+" jours avant mon anniversaire!");
        */                                          });

