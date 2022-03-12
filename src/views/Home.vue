<template>
  <div class="home">
    <a-layout id="components-layout-demo-responsive">
      <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
        <div class="logo">这是一个logo</div>
        <a-menu theme="dark" mode="inline" :selected-keys="[current]" @click="handleClick">
          <a-menu-item v-for="m in menus[0].children" :key="m.name" @click="toPath(m.path)">
            <a-icon v-if="m.meta" :type="m.meta.icon" />
            <span v-if="m.meta" class="nav-text">{{ m.meta.title }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
          <h2>Vue 组件通信方式</h2>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff' }" class="content">
            简易示例
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="textalign: center"> Demo ©2022 Created by MarkLin </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import routes from '@/router';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      defualt: 'A',
      current: 'A',
    };
  },
  computed: {
    menus() {
      return routes.options.routes;
    },
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    handleClick(e) {
      this.current = e.key;
    },
    toPath(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="less" scoped>
#components-layout-demo-responsive {
  height: 100vh;
  .logo {
    height: 32px;
    line-height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .content {
    height: calc(100vh - 152px);
    overflow: hidden;
    overflow-y: auto;
  }
  .content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
  .content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: #ededed;
    border-radius: 10px;
  }
}
/deep/ .ant-menu {
  text-align: left;
}
</style>
