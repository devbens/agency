<script lang="ts">
  import { Section, HeroHeader } from 'flowbite-svelte-blocks';


</script>



<Section name="heroDefault" sectionClass="relative py-8 sm:py-[90px] bg-black relative">

<div class="animetext relative">

  <HeroHeader h1Class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white text-left" pClass="mb-8 text-lg font-normal text-white lg:text-xl sm:px-0 dark:text-gray-400 text-left" >

      <svelte:fragment slot="h1" >Who we are?<hr class="mt-5 my-5"></svelte:fragment>

      <svelte:fragment slot="paragraph" >XO is a dynamic digital agency with a unique footprint spanning Dubai, Denmark, and Greenland. From the vibrant innovation hub of Dubai to the design-centric landscape of Denmark and the pristine beauty of Greenland, our diverse team draws inspiration from these rich environments to create digital solutions that transcend boundaries. <br /><br />Wherever you are, our local expertise combined with a global perspective ensures that your digital journey is tailored to meet the unique demands of your market. Explore the world of possibilities with XO.</svelte:fragment>
  </HeroHeader>
</div>
</Section>


<style>

.animetext {
  animation: fade linear both;
  animation-timeline: view();
  animation-range: entry 50% cover 50%;

}
hr {
  border-color: transparent;
}
hr::after {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    border-radius: 50px;
    background: linear-gradient(90deg, #06b6d4, transparent);
    position: absolute;
    background-size: 200%;
    animation: reveal both linear;
    animation-timeline: view();
    animation-range: entry 0% cover 150%;
    background-repeat: no-repeat;

}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes reveal {
  from {
    background-position-x: 200%;
  }
  to {
    background-position-x: 0%
  }
}
</style>