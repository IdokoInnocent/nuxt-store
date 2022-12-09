<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-6">
          <div v-if="user" class="flex justify-between gap-4">
            <li>
              <p>Welcome {{ user.displayName.toUpperCase() }}</p>
            </li>
            <li>
              <button class="text-gray" @click="handleLogout">Log out</button>
            </li>
          </div>
          <div v-if="!user" class="flex justify-between gap-4">
            <li>
              <NuxtLink to="/auth/login">Log in</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/auth/signup">sign up</NuxtLink>
            </li>
          </div>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the content here -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { logout } = useLogout();
const { user } = getUser();

const router = useRouter();

const handleLogout = async () => {
  await logout();
  console.log("user is succefully logout");
  router.push("/auth/login");
};
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

/* button,
.btn {
  background-color: var(--secondary);
  border-radius: 0.8rem;
  border: 0;
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
}

button:hover .btn:hover {
  background-color: var(--primary);
  color: white;
}

button:disabled {
  opacity: 0.5;
  color: var(--primary);
  background: var(--secondary);
  cursor: not-allowed;
} */
</style>
