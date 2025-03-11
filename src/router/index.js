import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/Work.vue'),
    meta: {
      title: 'Our Work - Video Production Projects | Juniper Island',
      description: 'Explore our portfolio of video production work for clients across different industries.'
    }
  },
  {
    path: '/work/:slug',
    name: 'CaseStudy',
    component: () => import('@/views/CaseStudy.vue'),
    meta: {
      title: 'Case Study | Juniper Island',
      description: 'In-depth look at our video production process and results.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue'),
    meta: {
      title: 'Blog - Video Marketing Insights | Juniper Island',
      description: 'Tips, trends, and strategies to elevate your brand through video.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('@/views/BlogPost.vue'),
    meta: {
      title: 'Blog | Juniper Island',
      description: 'Insights from Juniper Island on video marketing.'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    meta: {
      title: 'Content Management System | Juniper Island',
      description: 'Admin interface for managing case studies and blog posts'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 