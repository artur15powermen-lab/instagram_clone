<template>
  <div class="auth">
    <h1>📱 SocialHub</h1>
    <form @submit.prevent="submit">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Parol" required />
      <button :disabled="loading">{{ loading ? "Kirish..." : "Kirish" }}</button>
    </form>
    <p style="text-align:center; font-size:14px">
      Hisobingiz yo'qmi? <router-link to="/register" style="color:#0095f6">Ro'yxatdan o'tish</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { login } from "../api/auth";

const username = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();

async function submit() {
  loading.value = true;
  try {
    await login(username.value, password.value);
    Swal.fire({ icon: "success", title: "Xush kelibsiz!", timer: 1000, showConfirmButton: false });
    router.push("/");
  } catch {
    Swal.fire("Xato", "Login yoki parol noto'g'ri", "error");
  } finally {
    loading.value = false;
  }
}
</script>