import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

// Custom design token compilation for PrimeNG 21
const PortfolioPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: '#fffdfe',
                    50: '#f9f8f9',
                    100: '#f2f0f2',
                    200: '#e5e1e5',
                    300: '#d1cbd1',
                    400: '#b8adb8',
                    500: '#9b8f9b',
                    600: '#7e717e',
                    700: '#645764',
                    800: '#4c414c',
                    900: '#383038',
                    950: '#050f05' // Mapping text to base dark surface
                },
                primary: {
                    color: '#0dfb05',
                    contrastColor: '#050f05',
                    hoverColor: '#0ce204',
                    activeColor: '#0bc804'
                },
                text: {
                    color: '#050f05'
                }
            },
            dark: {
                surface: {
                    0: '#050f05',
                    50: '#0a160a',
                    100: '#112211',
                    200: '#1b331b',
                    300: '#274b27',
                    400: '#356435',
                    500: '#458145',
                    600: '#5ca25c',
                    700: '#7cc37c',
                    800: '#a3e1a3',
                    900: '#cef4ce',
                    950: '#e1f9e0' // Mapping light text color to base bright surface
                },
                primary: {
                    color: '#14ea04',
                    contrastColor: '#050f05',
                    hoverColor: '#12d103',
                    activeColor: '#10b803'
                },
                text: {
                    color: '#e1f9e0'
                }
            }
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: PortfolioPreset,
                options: {
                    darkModeSelector: '.p-dark', // PrimeNG 21 default selector toggled on the HTML/Body tag
                    cssLayer: false
                }
            }
        })
    ]
};
