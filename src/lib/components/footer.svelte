<script>
  import { Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  import logo from '$lib/assets/img/logo.svg';
  import Newsletter from '$lib/components/parts/newsletterPart.svelte'
  import { footerone, footertwo, footerthree } from '$lib/menu';


</script>

<Newsletter />




<Footer footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="/" src="{logo}" alt="XO Logo" name="XO" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-2">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
        {#each footerone as tab, index}
          <FooterLink
              liClass="mb-4"
              href={tab.link}
              target={index === 2 ? "_blank" : ""}
          >
              {tab.name}
          </FooterLink>
        {/each}
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
        <FooterLinkGroup>
        {#each footertwo as tab, index}
          <FooterLink
              liClass="mb-4"
              href={tab.link}
              target={index === 2 ? "_blank" : ""}
          >
              {tab.name}
          </FooterLink>
        {/each}
        </FooterLinkGroup>
      </div>

    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    Copyright
    <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
      <FooterIcon href="/">
#
      </FooterIcon>
      <FooterIcon href="/">
#
      </FooterIcon>
      <FooterIcon href="/">
#
      </FooterIcon>
    </div>
  </div>
</Footer>