<template>
  <div>
    <Modal
      v-model="state"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>{{val}}</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
export default {
  props:['val'],
  data() {
    return {
      a:false
    };
  },
  methods: {
    ok () {

    },
    cancel () {
      this.$emit('setState')
    }
  },
  computed: {
    state(){
      return this.val;
    }
  },
  watch: {
    state(data){
     return data
    }
  }
};
</script>
