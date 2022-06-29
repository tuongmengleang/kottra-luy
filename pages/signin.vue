<template>
  <div>
    <div
      class="relative flex-1 flex flex-row justify-between mx-auto max-w-6xl h-full py-4 px-6"
    >
      <a href="#" class="text-xl font-bold text-green-600">Kottra Luy</a>
      <!--      <a href="#" class="px-2 py-1 bg-green-600 rounded-md text-white text-md">Dashboard</a>-->
    </div>
    <div class="background-overlay">
      <div
        class="absolute top-1/2 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"
      ></div>
      <div
        class="absolute hidden sm:block top-28 right-1/3 transform translate-x-64 translate-y-4 h-24 w-24 rounded-full bg-gray-900 dark:bg-white"
      ></div>
      <div
        class="absolute hidden sm:block top-20 left-0 sm:top-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
      ></div>
      <div
        class="absolute hidden sm:block bottom-0 right-10 sm:-bottom-10 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"
      ></div>
      <div
        class="absolute hidden md:block top-1/2 right-1/3 mt-5 transform -translate-x-4 -translate-y-40 h-20 w-20 rounded-full bg-green-600 linear-wipe"
      ></div>
      <div class="absolute bottom-0 right-0 triangle-shape"></div>
    </div>
    <div
      class="w-full lg:w-1/3 md:w-1/2 sm:w-full sm:px-20 md:px-0 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 mx-auto transform translate-x-screen translate-y-screen"
    >
      <div class="w-full p-5">
        <!-- backdrop-blur-md bg-white/30 dark:bg-white/10 shadow-md border rounded-lg -->
        <h1 class="text-2xl font-semibold">Sign Up</h1>
        <span class="text-md text-gray-500"
          >Sign up to your account to continue.</span
        >
        <div class="flex flex-col gap-4 pt-10">
          <button
            type="button"
            class="w-full box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            @click="signInWithGoogle"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span class="relative z-20 flex items-center text-sm">
              <svg
                class="w-4 h-4 mr-2 flex-none"
                enable-background="new 0 0 128 128"
                version="1.1"
                viewBox="0 0 128 128"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="_x31__stroke">
                  <g id="Google">
                    <rect
                      clip-rule="evenodd"
                      fill="none"
                      fill-rule="evenodd"
                      height="128"
                      width="128"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64"
                      fill="#FBBC05"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182"
                      fill="#EA4335"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818"
                      fill="#34A853"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64"
                      fill="#4285F4"
                      fill-rule="evenodd"
                    />
                  </g>
                </g>
              </svg>
              Sign up with Google
            </span>
          </button>
          <button
            type="button"
            class="w-full box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            @click="signInWithFacebook"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span class="relative z-20 flex items-center text-sm">
              <svg
                class="w-4 h-4 mr-2"
                version="1.1"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"
                  style="fill: #ffffff"
                />
              </svg>
              Sign up with Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
    <!--  <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" /><use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /><use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /><use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /></g></svg>-->
  </div>
</template>

<script lang="ts" setup>
const { auth } = useSupabaseClient()
const user = useSupabaseUser()

const router = useRouter()

watchEffect(() => {
  if (user.value) router.push('/')
})

const signInWithFacebook = async () => {
  await auth.signIn({ provider: 'facebook' })
}
const signInWithGoogle = async () => {
  await auth.signIn({ provider: 'google' })
}
</script>

<style lang="scss">
.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
.waves {
  position: absolute;
  width: 100%;
  height: 15vh;
  bottom: 0;
  left: 0;
  z-index: 1;

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
