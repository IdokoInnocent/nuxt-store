<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button class="btn" v-if="!isPending">Sign up</button>
    <button class="btn" v-else>Loading...</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script setup>
const { error, signup, isPending } = useSignup();

const displayName = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  console.log(displayName.value, email.value, password.value);
  await signup(email.value, password.value, displayName.value);
  console.log("user signed up");
};
</script>

<style>
form {
  max-width: 35rem;
  margin: 2rem auto;
  padding: 2rem;
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
