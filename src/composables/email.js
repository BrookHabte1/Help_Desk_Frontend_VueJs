import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useEmails() {
  const emails = ref([]);
  const email = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getEmails = async () => {
    const response = await axios.get("/api/email");
    emails.value = response.data.data;
  };

  const getEmail = async (id) => {
    const response = await axios.get("/api/email/" + id);
    email.value = response.data.data;
  };

  const storeEmail = async (data) => {
    try {
      await axios.post("/api/email", data);
      alert("Contact information is created.");
      await router.push({ name: "customize" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateEmail = async (id) => {
    try {
      await axios.put("/api/email/" + id, email.value);
      alert("Contact information is updated.");
      await router.push({ name: "customize" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyEmail = async (id) => {
    try {
      if (!window.confirm("Are you sure to delete this Contact information?")) {
        return;
      }
      await axios.delete("/api/email/" + id);
      await getEmails();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };
  return {
    email,
    emails,
    getEmails,
    getEmail,
    storeEmail,
    updateEmail,
    destroyEmail,
    errors,
  };
}
