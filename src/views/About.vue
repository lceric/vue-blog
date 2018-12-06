<template>
  <div class="st-main container-fluid">
    <at-card class="st-wrapper" :body-style="{ padding: 0, height: '100vh' }">
      <h1 class="about__title bg">ChaoLee</h1>
      <div class="about__wrapper">
        <div class="about__img" v-if="mineInfo.author">
          <img :width="mineInfo.author.cover.width"
            :height="mineInfo.author.cover.height"

            :src="mineInfo.author.cover.url" alt="ChaoLee">
          <span>ChaoLee</span>
        </div>
        <div class="about__info flex">
          <p class="info__row"
            v-for="(item, idx) in mineInfo.data" :key="idx">
            <label for="">{{item.label}}</label>
            <a :class="{nolink: item.url === ''}" :href="item.url === '' ? 'javascript:void(0)' : item.url"
              target="blank">{{item.value}}</a>
          </p>
        </div>
      </div>
      <div class="about__discription">
        <p class="disc__row" v-for="(row, idx) in mineInfo.discription"
          :key="idx">{{row}}</p>
      </div>
    </at-card>
  </div>
</template>

<script>
import { getMineInfo } from '@/api'
export default {
  data () {
    return {
      mineInfo: []
    }
  },
  created () {
    const vm = this
    getMineInfo().then(res => {
      console.info(res.data)
      vm.mineInfo = res.data[0]
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
