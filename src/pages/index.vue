<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <dl>
      <dt>Vuex Bind Check</dt>
      <dd>isMobile: {{ isMobile }}</dd>
      <dd>isTablet: {{ isTablet }}</dd>
      <dd>isDesktop: {{ isDesktop }}</dd>
    </dl>
    <div class="cards">
      <Card
        v-for="person in people"
        :key="person.id"
        :person="person"
      ></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"
import { mapState } from 'vuex'

@Component({
  components: {
    Card
  },
  computed: {
    ...mapState('device-type', ['isMobile', 'isTablet', 'isDesktop'])
  }
})
export default class PagesIndex extends Vue {
  @State people!: Person[]
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
