import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <p-button 
      [icon]="isDark() ? 'pi pi-sun' : 'pi pi-moon'" 
      [style]="{ 
        'background': 'var(--linearPrimarySecondary)', 
        'border': 'none',
        'color': isDark() ? '#050f05' : '#fffdfe'
      }"
      (onClick)="toggleTheme()" 
      [ariaLabel]="isDark() ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      rounded="true"
      raised="true">
    </p-button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class ThemeToggleComponent {
  // Use Angular Signals to track state. Initializes based on system preference.
  isDark = signal<boolean>(
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  constructor() {
    // Effect runs automatically whenever the isDark signal changes
    effect(() => {
      if (typeof document !== 'undefined') {
        const element = document.documentElement;
        if (this.isDark()) {
          element.classList.add('p-dark');
        } else {
          element.classList.remove('p-dark');
        }
      }
    });
  }

  toggleTheme(): void {
    this.isDark.update(value => !value);
  }
}
