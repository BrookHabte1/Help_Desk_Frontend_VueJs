import { ref } from "vue";
import axios from "axios";

export default function useRoles() {
  const roles = ref([]);

  const getRoles = async () => {
    const response = await axios.get("/api/roles");
    roles.value = response.data.data;
  };

  return {
    roles,
    getRoles,
  };
}
