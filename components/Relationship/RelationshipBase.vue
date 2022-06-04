<template></template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'RelationshipBase' })
export default class RelationshipBase extends Vue {
  private relationship: string[] = [];
  private name: string = '';

  protected Init(name: string): void {
    this.name = name;
  }

  public SetRelationship(relationship?: string[]): void {
    if (relationship) this.relationship.concat(relationship);
  }

  protected GetRelationship(): string {
    const list = this.relationship;
    list.push(this.name);

    return list.join('-');
  }
}
</script>