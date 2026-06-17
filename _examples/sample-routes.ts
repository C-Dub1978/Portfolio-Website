import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { 
    path: 'landing', 
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'admin', 
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/admin.component').then(m => m.AdminComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) 
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent) 
  },
  { 
    path: 'music', 
    loadComponent: () => import('./features/music/music.component').then(m => m.MusicComponent) 
  },
  { 
    path: 'snippets', 
    loadComponent: () => import('./features/snippets/snippets.component').then(m => m.SnippetsComponent) 
  },
  { 
    path: 'media', 
    loadComponent: () => import('./features/media/media.component').then(m => m.MediaComponent) 
  },
  { 
    path: 'ai', 
    loadComponent: () => import('./features/ai/ai.component').then(m => m.AiComponent) 
  },
  { path: '**', redirectTo: 'landing' } // Wildcard fallback
];