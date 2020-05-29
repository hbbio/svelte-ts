<script lang="typescript">
  import { SvelteComponent } from "svelte";

  // Array<Item>
  // Item: {id: number, text: string, component, props}
  export let items: Array<{
    label: string;
    component: SvelteComponent;
    props: Object;
  }>;
  let active = 0;
</script>

<div>
  {#each items as item, id}
    <button on:click={() => (active = id)}>{item.label}</button>
  {/each}
</div>
{#if active !== undefined}
  <svelte:component this={items[active].component} {...items[active].props} />
{/if}
