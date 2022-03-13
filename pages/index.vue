<template>
  <v-card class="mx-auto" width="300" outlined>
    <v-card-title>My samples</v-card-title>
    <v-list>
      <v-list-group :value="false" no-action sub-group>
        <template v-slot:activator>
          <v-icon>mdi-application-brackets</v-icon>
          <v-list-item-title>Components</v-list-item-title>
        </template>

        <v-list-item
          v-for="({ title, icon, to }, i) in components"
          :key="i"
          :to="to"
          link
        >
          <v-icon v-text="icon"></v-icon>
          <v-list-item-title v-text="title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

type contents = {
  icon: string
  title: string
  to: string
}

@Component
export default class Index extends Vue {
  public components: contents[] = [
    {
      icon: 'mdi-pencil',
      title: 'Input text',
      to: '/',
    },
    {
      icon: 'mdi-form-select',
      title: 'Select box',
      to: '/',
    },
  ]
}
</script>