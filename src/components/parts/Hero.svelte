<script>
  import { Section, HeroHeader } from 'flowbite-svelte-blocks';
  //import { Button } from 'flowbite-svelte';
  // particlesJS.load("particles-js", "assets/particles.json", function () {
  //   console.log("callback - particles.js config loaded");
  // });
</script>

<Section name="heroDefault" sectionClass="relative py-8 sm:py-[90px] bg-white relative">

  <HeroHeader h1Class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white text-left" pClass="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 xl:px-48 dark:text-gray-400 text-left" >

    <svelte:fragment slot="h1" >We create valuable experiences pushing brands forward.</svelte:fragment>
    <svelte:fragment slot="paragraph" >Wherever you are, our local expertise combined with a global perspective ensures that your digital journey is tailored to meet the unique demands of your market.</svelte:fragment>
  </HeroHeader>

  <!-- <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
    <a href="/">
      <Button size="lg" color="dark">
        Learn more
      </Button>
    </a>
    <a href="/">
      <Button size="lg" color="light">
        Watch video
      </Button>
    </a>
  </div>
  <div id="particles-js" class="absolute inset-0" />
 -->

</Section>