<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
  import { mainmenu } from '$lib/menu';
</script>
<Navbar>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">XO</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get started</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    {#each mainmenu as tab, index}
        <NavLi
            href={tab.link}
        >
            {tab.name}
        </NavLi>
    {/each}
  </NavUl>
</Navbar>