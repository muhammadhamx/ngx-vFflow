import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NodesComponent } from "./nodes/nodes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NodesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dragableNodes';
}
