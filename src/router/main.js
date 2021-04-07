import Main from '@/views/main/Main'
import Home from '@/views/main/home/Home'

export default {
  path: '/',
  component: Main,
  children: [
    {
      path: '',
      name: 'Home',
      component: Home
    }
  ]
}