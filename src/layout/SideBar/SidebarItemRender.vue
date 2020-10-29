<script>
import path from 'path'
import ItemInfo from '@/layout/SideBar/ItemInfo.vue'
import { isExternal } from '@/utils/validate.js'
export default {
  name: 'SidebarItemRender',
  components: {
    ItemInfo
  },
  props: {
    // 一个路由对象
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      leOneChildRoute: undefined,
      gtOneChildRoute: undefined,
      submenuIndex: undefined
    }
  },
  created() {
    this.checkChild()
  },
  methods: {
    checkPath(path) {
      return isExternal(path)
    },
    checkChild() {
      if (!this.route.children || this.route.children.length <= 1) {
        this.leOneChildRoute = this.route
      } else {
        this.gtOneChildRoute = this.route
      }
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    },
    getMenuItemIndex() {
      if (this.leOneChildRoute.children) {
        const hiddenPath = this.resolvePath(this.leOneChildRoute.path)
        return path.resolve(hiddenPath, this.leOneChildRoute.children[0].path)
      } else {
        return this.resolvePath(this.leOneChildRoute.path)
      }
    },
    getSubmenuIndex() {
      return this.resolvePath(this.route.path)
    }
  },
  render(r) {
    if (this.route.hidden === true) {
      return null
    } else {
      if (this.checkPath(this.route.path)) { // 外链
        return (<a href={this.route.path} target='_blank' rel='noopener'>
          <el-menu-item index={this.route.path}>
            <item-info icon={this.route.meta.icon} title={this.route.meta.title}/>
          </el-menu-item>
        </a>)
      } else if (this.leOneChildRoute) { // 小于等于一个孩子
        // 有一个孩子
        if (this.leOneChildRoute.children && this.leOneChildRoute.children[0].meta) {
          return (<router-link to={this.getMenuItemIndex()}>
            <el-menu-item index={this.getMenuItemIndex()}>
              <item-info icon={this.leOneChildRoute.children[0].meta.icon} title={this.leOneChildRoute.children[0].meta.title}/>
            </el-menu-item>
          </router-link>)
        } else if (!this.leOneChildRoute.children && this.leOneChildRoute.meta) { // 没有孩子
          return (<router-link to={this.getMenuItemIndex()}>
            <el-menu-item index={this.getMenuItemIndex()}>
              <item-info icon={this.leOneChildRoute.meta.icon} title={this.leOneChildRoute.meta.title}/>
            </el-menu-item>
          </router-link>)
        } else { // 没有写meta
          return (<el-menu-item index='/'>
            <item-info />
          </el-menu-item>)
        }
      } else { // 大于一个孩子
        return (<el-submenu index={this.getSubmenuIndex()}>
          <template slot='title'>
            <item-info icon={this.gtOneChildRoute.meta.icon} title={this.gtOneChildRoute.meta.title} />
          </template>
          {
            this.gtOneChildRoute.children.map(item => {
              return <sidebar-item-render route={item} base-path={this.getSubmenuIndex()}/>
            })
          }
        </el-submenu>)
      }
    }
  }
}
</script>

