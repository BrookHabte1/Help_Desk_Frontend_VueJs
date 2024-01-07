import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useFeaturedTopics() {
  const featuredTopics = ref([]);
  const featuredTopic = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getFeaturedTopics = async () => {
    const response = await axios.get("/api/featured_topic");
    featuredTopics.value = response.data;
  };

  const getFeaturedTopic = async (id) => {
    const response = await axios.get("/api/featured_topic/" + id);
    featuredTopic.value = response.data.data;
  };

  const storeFeaturedTopic = async (data) => {
    try {
      await axios.post("/api/featured_topic", data);
      alert("Featured Topic is created.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };
  const updateFeaturedTopic = async (id) => {
    try {
      await axios.put("/api/featured_topic/" + id, featuredTopic.value);
      alert("Featured Topic is updated.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyFeaturedTopic = async (id) => {
    try {
      if (!window.confirm("Are you sure to delete this Featured Topic?")) {
        return;
      }
      await axios.delete("/api/featured_topic/" + id);
      await getFeaturedTopics();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };
  return {
    featuredTopic,
    featuredTopics,
    getFeaturedTopics,
    getFeaturedTopic,
    storeFeaturedTopic,
    updateFeaturedTopic,
    destroyFeaturedTopic,
    errors,
  };
}
