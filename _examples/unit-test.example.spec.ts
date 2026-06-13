import { TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { PortfolioService } from '../../core/services/portfolio.service';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let mockPortfolioService: jest.Mocked<PortfolioService>;

  beforeEach(async () => {
    mockPortfolioService = {
      getProjects: jest.fn().mockResolvedValue([{ id: 1, title: 'Test Project' }])
    } as any;

    await TestBed.configureTestingModule({
      imports: [ProjectListComponent],
      providers: [
        { provide: PortfolioService, useValue: mockPortfolioService }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
  });

  it('should resolve projects using the resource API', async () => {
    // Wait for the Angular 22 resource API loader to resolve
    await TestBed. Harrier?.whenStable(); 
    expect(component.projectsResource.value()).toEqual([{ id: 1, title: 'Test Project' }]);
    expect(component.projectsResource.isLoading()).toBe(false);
  });
});