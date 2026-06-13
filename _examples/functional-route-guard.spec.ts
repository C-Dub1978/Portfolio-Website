import { TestBed } from '@angular/core/testing';
import { authGuard } from './auth.guard';
import { AuthSignalService } from '../services/auth-signal.service';

describe('authGuard', () => {
  let authService: AuthSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSignalService]
    });
    authService = TestBed.inject(AuthSignalService);
  });

  it('should block navigation if user is unauthenticated', () => {
    authService.isAuthenticated.set(false); // Set mock signal state
    
    // Execute functional guard within Angular Injection Context
    const canActivate = TestBed.runInInjectionContext(() => authGuard({} as any, {} as any));
    expect(canActivate).toBe(false);
  });
});