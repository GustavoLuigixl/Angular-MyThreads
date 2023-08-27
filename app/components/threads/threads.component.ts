import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent {
  @Input() treadmensagem: string = ""
}
