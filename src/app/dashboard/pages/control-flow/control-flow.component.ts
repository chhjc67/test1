import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { __values } from 'tslib';

type Grade = 'A' | 'B' | 'C' | 'D';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('C');
  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React','Asp net core']);
  
  public toggleContent() {
    this.showContent.update((value) => !value);
    /* Para cambiar el valor de la señal*/
    // this.grade.set('B');
  }
}
