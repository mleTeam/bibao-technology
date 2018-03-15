import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Portal = () => import('@/components/Portal')
const Home = () => import('@/components/home/index')

const AboutUs = () => import('@/components/aboutUs/index')
const Company = () => import('@/components/aboutUs/company')
const Enterprise = () => import('@/components/aboutUs/enterprise')
const Team = () => import('@/components/aboutUs/team')

const News = () => import('@/components/news/index')
const Notice = () => import('@/components/news/notice')
const TradeNews = () => import('@/components/news/tradeNews')
const TradeNewsDetail = () => import('@/components/news/tradeNewsDetail')

const Product = () => import('@/components/product/index')

const ContactUs = () => import('@/components/contactUs/index')
const Address = () => import('@/components/contactUs/address')
const Employment = () => import('@/components/contactUs/employment')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portal',
      component: Portal,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'aboutUs',
          name: 'AboutUs_index',
          component: AboutUs,
          children:[
            {
              path: 'company',
              name: 'company',
              component: Company
            },
            {
              path: 'enterprise',
              name: 'enterprise',
              component: Enterprise
            },
            {
              path: 'team',
              name: 'team',
              component: Team
            }
          ]
        },
        {
          path: 'contactUs',
          name: 'ContactUs_index',
          component: ContactUs,
          children:[
            {
              path: 'address',
              name: 'Address',
              component: Address
            },
            {
              path: 'employment',
              name: 'employment',
              component: Employment
            }
          ]
        },
        {
          path: 'news',
          name: 'News_index',
          component: News,
          children:[
            {
              path: 'notice',
              name: 'notice',
              component: Notice
            },
            {
              path: 'tradeNews',
              name: 'tradeNews',
              component: TradeNews
            },
            {
              path: 'tradeNews/:tradeNewsId/detail',
              name: 'tradeNewsDetail',
              component: TradeNewsDetail
            }
          ]
        },
        {
          path: 'product',
          name: 'Product_index',
          component: Product
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    if(from.name == 'tradeNewsDetail' && to.name == 'tradeNews'){
      return { x: 0, y: 450 }
    }else if(to.name == 'tradeNewsDetail'){
      return { x: 0, y: 450 }
    }else{
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
})
