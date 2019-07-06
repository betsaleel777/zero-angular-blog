import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts = [
    {
      title:'le message',
      content:`Le message de l\'heure c'est la parole ointe du Seigneur pour notre age et préparer
               l\'épouse des derniers jours à pour l\'enlevement`,
      loveIts:0,
      created_at: new Date()
    },
    {
      title:'le messager',
      content:`Vu la confusion dans les dénomination,nous avons reçu le prophète de l\'age du nom de
               William Marrion Branham selon les écriture de Luc 17:30,Apocalypse 10:7,Malachie 4:5-6`,
      loveIts:0,
      created_at: new Date()
    },
    {
      title:'laodicée',
      content:`Dans un monde où les églises deviennent froides et formaliste,où la parole de Dieu n'est
               prêché dans toute sa puretée,les légèreté s'installe dans les église jusqu'à un point où
               les femmes prêche,plus de place pour la guérison divine ...`,
      loveIts:0,
      created_at: new Date()
    },
    {
      title:'les templatoman',
      content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      loveIts:0,
      created_at: new Date()
    }
  ]
}
