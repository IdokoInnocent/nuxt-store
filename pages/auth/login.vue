<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="btn text-center" v-if="!isPending">Log in</button>
    <button class="btn text-center" v-else disabled>Loading...</button>
  </form>
</template>

<script setup>
const { error, login, isPending } = useLogin();
const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  await login(email.value, password.value);

  if (!error.value) {
    console.log("user is logged in");
  }
};
</script>

<style scoped>
form {
  max-width: 35rem;
  margin: 2rem auto;
  padding: 2.5rem;
  border-radius: 0.8rem;
  box-shadow: 1px 2px 6px rgba (50, 50, 50, 0.5);
  border: 0.1rem solid var(--secondary);
  background: white;
}

input {
  border: 0;
  border-bottom: 1px solid #eee;
  padding: 1rem;
  outline: none;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 1rem auto;
}
</style>
