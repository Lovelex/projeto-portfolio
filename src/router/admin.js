import { auth } from '@/plugins/firebase'

import Admin from '@/views/admin/Admin'
import Dashboard from '@/views/admin/dashboard/Dashboard'
import Sobre from '@/views/admin/sobre/Sobre'
import Formacao from '@/views/admin/formacao/Formacao'
import Experiencia from '@/views/admin/experiencia/Experiencia'
import Qualificacao from '@/views/admin/qualificacao/Qualificacao'
import Portfolio from '@/views/admin/portfolio/Portfolio'
import Contato from '@/views/admin/contato/Contato'
import Mensagem from '@/views/admin/mensagem/Mensagem'
import Configuracao from '@/views/admin/configuracao/Configuracao'

export default {
  beforeEnter(to, from, next) {
    if(!auth.currentUser) {
      next({name: 'Login'})
    }
    if(auth.currentUser) {
      next()
    }
  },
  path: '/admin',
  component: Admin,
  children: [
    // {
    //   path: '',
    //   name: 'Admin',
    //   component: Dashboard,
    //   icon: 'mdi-view-dashboard',
    //   label: 'Dashboard'
    // },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre,
      icon: 'mdi-information-variant',
      label: 'Sobre'
    },
    {
      path: '/formacao',
      name: 'Formacao',
      component: Formacao,
      icon: 'mdi-school',
      label: 'Formação'
    },
    {
      path: '/experiencia',
      name: 'Experiencia',
      component: Experiencia,
      icon: 'mdi-flask-empty-plus',
      label: 'Experiência'
    },
    {
      path: '/qualificacao',
      name: 'Qualificacao',
      component: Qualificacao,
      icon: 'mdi-briefcase-plus',
      label: 'Qualificação'
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      icon: 'mdi-star-plus',
      label: 'Portfólio'
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato,
      icon: 'mdi-account',
      label: 'Contato'
    },
    {
      path: '/mensagem',
      name: 'Mensagem',
      component: Mensagem,
      icon: 'mdi-email',
      label: 'Mensagem'
    },
    {
      path: '/configuracao',
      name: 'Configuracao',
      component: Configuracao,
      icon: 'mdi-cogs',
      label: 'Configuração'
    },
  ]
}