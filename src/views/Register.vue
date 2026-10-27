<template>
  <div class="auth">
    <h1>Ro'yxatdan o'tish</h1>
    <form @submit.prevent="submit">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Parol" required minlength="6" />
      <button :disabled="loading">{{ loading ? "Yaratilmoqda..." : "Ro'yxatdan o'tish" }}</button>
    </form>
    <p style="text-align:center; font-size:14px">
      Hisobingiz bormi? <router-link to="/login" style="color:#0095f6">Kirish</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { register, login } from "../api/auth";

const username = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();

async function submit() {
  loading.value = true;
  try {
    await register({ username: username.value, email: email.value, password: password.value });
    await login(username.value, password.value);
    Swal.fire({ icon: "success", title: "Muvaffaqiyat!", timer: 1000, showConfirmButton: false });
    router.push("/");
  } catch (e) {
    const msg = e.response?.data
      ? Object.values(e.response.data).flat().join(" ")
      : "Xatolik";
    Swal.fire("Xato", msg, "error");
  } finally {
    loading.value = false;
  }
}
</script>