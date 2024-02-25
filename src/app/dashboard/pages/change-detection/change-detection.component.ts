import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `<p>change-detection works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent { }
