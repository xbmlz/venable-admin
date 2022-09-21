<script setup lang="ts">
import { useAppStore, useUserStore } from '@/store'
import GlobalSettings from '../../components/settings/index.vue'

const appStore = useAppStore()
const userStore = useUserStore()

const toggleDrawerMenu = inject('toggleDrawerMenu')

// theme
const theme = computed(() => {
  return appStore.theme
})
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    appStore.toggleTheme(dark)
  },
})
const toggleTheme = useToggle(isDark)
const handleToggleTheme = () => {
  toggleTheme()
}

// full scene
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

// settings
const settingsRef = ref()
const setSettingsVisible = () => {
  settingsRef.value.visible = true
}
// user
const avatar = computed(() => {
  return userStore.avatar
})
const handleLogout = () => {
  userStore.logout()
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <a-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        />
        <a-typography-title
          :style="{ marginTop: '0.8rem', fontSize: '18px' }"
          :heading="5"
        >
          VEnable
        </a-typography-title>
        <icon-menu-fold
          v-if="appStore.isMobile"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
    </div>
    <ul class="navbar-right">
      <!-- search -->
      <!-- <li>
        <a-tooltip content="搜索">
          <a-button class="nav-btn" type="outline" shape="circle">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <!-- theme -->
      <li>
        <a-tooltip
          :content="
            theme === 'light' ? '点击切换为暗黑模式' : '点击切换为明亮模式'
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="handleToggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- full scene -->
      <li>
        <a-tooltip
          :content="isFullscreen ? '点击退出全屏模式' : '点击切换全屏模式'"
        >
          <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- settings -->
      <li>
        <a-tooltip content="页面配置">
          <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="setSettingsVisible"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- user -->
      <li>
        <a-dropdown trigger="click">
          <a-avatar :size="28" :style="{ cursor: 'pointer' }">
            <img alt="avatar" :src="avatar" />
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span> 退出登录 </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
    <!-- page settings -->
    <GlobalSettings ref="settingsRef" />
  </div>
</template>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.navbar-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.navbar-right {
  display: flex;
  padding-right: 20px;
  list-style: none;

  :deep(.locale-select) {
    border-radius: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 14px;
  }
  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }
  .trigger-btn {
    margin-left: 14px;
  }
}
</style>