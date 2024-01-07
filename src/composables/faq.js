import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useEmails() {
  const faqs = ref([]);
  const faq = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getFaqs = async () => {
    const response = await axios.get("/api/faq");
    faqs.value = response.data.data;
  };

  const getFaq = async (id) => {
    const response = await axios.get("/api/faq/" + id);
    faq.value = response.data.data;
  };

  const storeFaq = async (data) => {
    try {
      await axios.post("/api/faq", data);
      alert("FAQ is created.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };
  const updateFaq = async (id) => {
    try {
      await axios.put("/api/faq/" + id, faq.value);
      alert("FAQ is updated.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyFaq = async (id) => {
    try {
      if (!window.confirm("Are you sure to delete this FAQ?")) {
        return;
      }
      await axios.delete("/api/faq/" + id);
      await getFaqs();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };
  return {
    faq,
    faqs,
    getFaqs,
    getFaq,
    storeFaq,
    updateFaq,
    destroyFaq,
    errors,
  };
}
