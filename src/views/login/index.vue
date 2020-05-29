<template>
  <div class="content">Login</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { queryVipInfo } from '../../api/index'

@Component({})
export default class Login extends Vue {
  public created() {
    queryVipInfo({ pageNo: 1, pageSize: 2, token: '3' }).then((res: any) => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss"></style>
