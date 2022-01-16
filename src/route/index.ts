import { createWebHistory, createRouter } from 'vue-router'

/**
 * 路由参数说明
 *  path: 路由的访问路径
 *  component: 路由对应组件的位置
 *  name: 路由的名称
 *  hidden: 是否隐藏路由
 *  alwaysShow: 是否一直显示为目录
 *  noShowingChildren: 不显示子类
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '/page1',
    component: () => import('@/components/page1.vue'),
    name: 'page1',
    meta: {
      title: 'page1',
    }
  },
  {
    path: '/page2',
    component: () => import('@/components/page2.vue'),
    name: 'page2',
    meta: {
      title: 'page2',
    }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export function resetRouet() {
  const newRouter = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
  })

  return newRouter;
}


router.afterEach(() => {
  let doc = document.getElementById('app') || null;
  doc == null ? "" : doc.scrollTop = 0;
  if (doc !== null) {
    doc.scrollTop = 0;
  }
})


export default router;