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
.about__title {
  line-height: 60px;
  text-align: center;
  color: #fff;
  font-family: Gotham-Medium;
  font-weight: lighter;
  background-color: #387ce7;
}
.about__wrapper {
  display: flex;
  padding-top: 60px;
}
.about__img {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px
}
.about__info {
  flex: 1;
  margin-bottom: 10px;
  padding: 8px 58px;
  flex-direction: column;
  .info__row {
    font-size: 16px;
    // padding: 8px 28px;
    margin-bottom: 18px;
    line-height: 38px;
    border-bottom: 1px dotted #387ce7;
    &:last-child {
      border-color: transparent;
    }
    label {
      display: inline-block;
      width: 70px;
      margin-right: 26px;
      font-weight: bold;
    }
    .nolink {
      color: #787878;
    }
  }
}
.about__discription {
  line-height: 36px;
  .disc__row {
    text-indent: 24px;
    padding: 8px 58px;
    color: #787878;
  }
}
</style>
