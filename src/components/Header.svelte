<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  import { mainmenu } from './parts/Menu';


</script>
<Navbar>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get started</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    {#each mainmenu as tab, index}
        <NavLi
            href={tab.link}
            target={index === 2 ? "_blank" : ""}
        >
            {tab.name}
        </NavLi>
    {/each}
  </NavUl>
</Navbar>