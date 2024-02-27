import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  /* angular esta menos pendiente de los cambios con Signal */
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });
  /* propiedad tradicional */
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'Asp net core',
      }));
      this.frameworkAsProperty.name = 'React';
      console.log('Procesado...');
    }, 3000);
  }
}
