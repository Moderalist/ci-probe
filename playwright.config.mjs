import {defineConfig,devices} from '@playwright/test';
export default defineConfig({testDir:'tests',fullyParallel:true,reporter:'line',projects:[{name:'webkit',use:{...devices['Desktop Safari']}}]});
