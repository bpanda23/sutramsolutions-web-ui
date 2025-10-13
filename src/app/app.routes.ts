import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'home2', loadComponent: () => import('./pages/home2/home2.component').then(m => m.Home2Component) },
    { path: 'about-us', loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent) },
    { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
    { path: 'error-page', loadComponent: () => import('./pages/error-page/error-page.component').then(m => m.ErrorPageComponent) },
    { path: 'gallery-grid-colum', loadComponent: () => import('./pages/gallery-grid-colum/gallery-grid-colum.component').then(m => m.GalleryGridColumComponent) },
    { path: 'gallery-masonary-colum', loadComponent: () => import('./pages/gallery-masonary-colum/gallery-masonary-colum.component').then(m => m.GalleryMasonaryColumComponent) },
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
    { path: 'advisor-carousel', loadComponent: () => import('./teachers/advisor-carousel/advisor-carousel.component').then(m => m.AdvisorCarouselComponent) },
    { path: 'advisor-grid', loadComponent: () => import('./teachers/advisor-grid/advisor-grid.component').then(m => m.AdvisorGridComponent) },
    { path: 'advisor-details', loadComponent: () => import('./teachers/advisor-details/advisor-details.component').then(m => m.AdvisorDetailsComponent) },
    { path: 'course-details', loadComponent: () => import('./courses/course-details/course-details.component').then(m => m.CourseDetailsComponent) },
    { path: 'courses-grid', loadComponent: () => import('./courses/courses-grid/courses-grid.component').then(m => m.CoursesGridComponent) },
    { path: 'courses-carousel', loadComponent: () => import('./courses/courses-carousel/courses-carousel.component').then(m => m.CoursesCarouselComponent) },
    { path: 'event1', loadComponent: () => import('./event/event1/event1.component').then(m => m.Event1Component) },
    { path: 'event2', loadComponent: () => import('./event/event2/event2.component').then(m => m.Event2Component) },
    { path: 'blog-left-sidebar', loadComponent: () => import('./blog/blog-left-sidebar/blog-left-sidebar.component').then(m => m.BlogLeftSidebarComponent) },
    { path: 'blog-right-sidebar', loadComponent: () => import('./blog/blog-right-sidebar/blog-right-sidebar.component').then(m => m.BlogRightSidebarComponent) },
    { path: 'blog-single-left-sidebar', loadComponent: () => import('./blog/blog-single-left-sidebar/blog-single-left-sidebar.component').then(m => m.BlogSingleLeftSidebarComponent) },
    { path: 'blog-single-right-sidebar', loadComponent: () => import('./blog/blog-single-right-sidebar/blog-single-right-sidebar.component').then(m => m.BlogSingleRightSidebarComponent) },
    { path: 'blog-single', loadComponent: () => import('./blog/blog-single/blog-single.component').then(m => m.BlogSingleComponent) },
    { path: 'blog-standard', loadComponent: () => import('./blog/blog-standard/blog-standard.component').then(m => m.BlogStandardComponent) },
    

    { path: '**', redirectTo: '' }
];
