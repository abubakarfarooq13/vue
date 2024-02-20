<template>
    <div>
        <div class="flex justify-between items-center px-4 py-2 border-b border-gray-900 dark:border-slate-800 hd">
      <div class="flex justify-center xs:gap-3 items-center">
        <div
          class="lg:flex text-white cursor-pointer transition ease-in-out duration-300  xs:flex"
          
        >
      <!-- <Menu size={30} />  -->
        </div>
        <div class="button">
          <router-link :to="{name:'Home'}">
            <span class="actual-text">&nbsp;JOFIND&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;JOFIND&nbsp;
            </span>
          </router-link>
        </div>
      </div>
      <div class="flex justify-between items-center gap-2">
        <button class="hbutton">
          <span class="hspan">
            <h1 >Sign in</h1>
          </span>
        </button>
        <button class="hbutton">
          <span class="hspan">Employers</span>
        </button>
        <button class="hbutton">
          <span class="hspan">Wallet</span>
        </button>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"HeaDer"
}
</script>