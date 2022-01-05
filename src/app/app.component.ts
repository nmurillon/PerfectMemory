import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { fadeAnimation } from 'src/app/_animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'perfect-recipe';
  faGithub = faGithub;

  prepareRoute(outlet: RouterOutlet): ActivatedRoute | '' {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
