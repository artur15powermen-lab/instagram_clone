import { ref } from "vue";
import * as usersApi from "../api/users";
import { logout as logoutApi } from "../api/auth";

const user = ref(null);
const loading = ref(false);

export function useAuth() {
  async function fetchMe() {
    loading.value = true;
    try {
      user.value = (await usersApi.me()).data;
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    logoutApi();
    user.value = null;
  }

  return { user, loading, fetchMe, logout };
}