<template>
  <div class="st-footer">
    <at-modal v-model="hlModel" :styles="{top: '20vh'}" :showFooter="false">
      <ul class="type-list max-height">
        <li class="list__item small"
          @click="switchCode(hl)"
          :class="{actived: currentCodeStyle === hl}"
          v-for="(hl,idx) in hlList" :key="idx"> {{hl}}</li>
      </ul>
    </at-modal>
    <div class="st-wapper container-fluid flex flex-between">
      <p class="footer__copyright">©2017 设计人生. 保留所有权利 陕ICP备17000202号</p>
      <div class="footer__contact flex">
        <div class="contact__item">
          <i class="icon icon-github"></i>
        </div>
        <div class="contact__item" @click="openModal">
          代码风格
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hlObj from '@/utils/hl.js'
export default {
  data () {
    return {
      hlList: [],
      hlModel: false,
      currentCodeStyle: global.codeStyle
    }
  },
  created () {
    this.hlList = Object.keys(hlObj)
    this.currentCodeStyle = window.localStorage.getItem('hlcss') || global.codeStyle
  },
  methods: {
    openModal () {
      this.hlModel = true
    },
    switchCode (hl) {
      window.localStorage.setItem('hlcss', hl)
      window.location.reload()
    }
  }
}
</script>
