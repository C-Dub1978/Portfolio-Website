import { Component, inject } from '@angular/core';
import { resource } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-project-list',
  imports: [PanelModule],
  template: `
    @if (projectsResource.isLoading()) {
      <p>Loading projects...</p>
    } @else {
      @for (project of projectsResource.value(); track project.id) {
        <p-panel [header]="project.title">
          <p>{{ project.description }}</p>
        </p-panel>
      }
    }`
})
export class ProjectListComponent {
  private portfolioService = inject(PortfolioService);

  // Using Angular 22 Resource API for async data
  projectsResource = resource({
    loader: () => this.portfolioService.getProjects()
  });
}
