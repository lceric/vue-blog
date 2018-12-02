<template>
  <div class="st-modify__controller">
    <router-link v-if="add" tag="div" class="st-button st-button--float st-button__add" to="/modify">
      <i class="icon icon-plus"></i>
    </router-link>
    <div v-if="edit" @click="editController" class="st-button st-button--float st-button__add">
      <i class="icon icon-edit"></i>
    </div>
    <div v-if="save" @click="saveController" class="st-button st-button--float st-button__save">
      <i class="icon icon-save"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ControllerBar',
  props: {
    add: {
      type: Boolean,
      default: false
    },
    save: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    saveController () {
      this.$emit('on-save')
    },
    editController () {
      this.$emit('on-edit')
    }
  }
}
</script>
