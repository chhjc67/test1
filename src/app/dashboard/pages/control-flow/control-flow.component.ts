import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { __values } from 'tslib';

type Grade = 'A' | 'B' | 'C' | 'D';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal([
    'Angular',
    'Vue',
    'Svelte',
    'Qwik',
    'React',
    'Asp net core',
  ]);
  public letra: string = 'E';

  public toggleContent() {
    this.showContent.update((value) => !value);
    /* Para cambiar el valor de la señal*/
    switch (this.grade()) {
      case 'A':
        this.grade.set('B');
        this.letra = 'F';
        break;
      case 'B':
        this.grade.set('C');
        this.letra = 'H';
        break;
      case 'C':
        this.grade.set('D');
        this.letra = 'I';
        break;
      default:
        this.grade.set('A');
        this.letra = 'E';
    }
    // this.frameworks.set('Python');
  }
}
