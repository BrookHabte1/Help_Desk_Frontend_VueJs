import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useUsers() {
  const user = ref([]);
  const users = ref([]);
  const Profile = ref([]);
  const SuperAdmins = ref([]);
  const SuperAdmin = ref([]);
  const Admins = ref([]);
  const Admin = ref([]);
  const ContactUsers = ref([]);
  const ContactUser = ref([]);
  const contactAdmins = ref([]);
  const errors = ref({});
  const router = useRouter();
  // const getUsers = async () => {
  //   const response = await axios.get("/api/user/super_admins/");
  //   users.value = response.data.data;
  // };

  const getSuperAdmins = async () => {
    const response = await axios.get("/api/user/super_admins");
    SuperAdmins.value = response.data.data;
  };

  const getSuperAdmin = async (id) => {
    const response = await axios.get("/api/users/" + id);
    SuperAdmin.value = response.data.data;
  };

  const getAdmins = async () => {
    const response = await axios.get("/api/user/admins");
    Admins.value = response.data.data;
  };

  const getAdmin = async (id) => {
    const response = await axios.get("/api/users/" + id);
    Admin.value = response.data.data;
  };

  const getContactUsers = async () => {
    const response = await axios.get("/api/user/contact_users/");
    ContactUsers.value = response.data.data;
  };

  const getContactUsersAdmins = async () => {
    const response = await axios.get("/api/user/admins_contact_users/");
    contactAdmins.value = response.data.data;
  };

  const getContactUser = async (id) => {
    const response = await axios.get("/api/users/" + id);
    ContactUser.value = response.data.data;
  };

  const getupdateProfile = async () => {
    const response = await axios.get("/api/profile/update/");
    Profile.value = response.data.data;
  };

  const updateProfile = async () => {
    try {
      const userData = {
        ...Profile.value,
        password_confirmation: Profile.value.password,
      };
      await axios.put("/api/profile/update", userData);
      console.log(userData);
      alert("Your profile info. is updated");
      await router.push({ name: "presentation" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateSuperAdmin = async (id) => {
    try {
      const userData = {
        ...SuperAdmin.value,
        password_confirmation: SuperAdmin.value.password,
      };
      await axios.put("/api/users/" + id, userData);
      alert("User info. is updated.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateAdmin = async (id) => {
    try {
      const userData = {
        ...Admin.value,
        password_confirmation: Admin.value.password,
      };
      await axios.put("/api/users/" + id, userData);
      alert("User info. is updated.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateContactUser = async (id) => {
    try {
      const userData = {
        ...ContactUser.value,
        password_confirmation: ContactUser.value.password,
      };
      await axios.put("/api/users/" + id, userData);
      alert("User info. is updated.");
      await router.push({ name: "manage" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroySuperAdminUser = async (id) => {
    try {
      if (!window.confirm("Are you sure to delete this User?")) {
        return;
      }
      await axios.delete("/api/users/" + id);
      await getSuperAdmins();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyAdminUser = async (id) => {
    try {
      if (!window.confirm("Are you sure to delete this User?")) {
        return;
      }
      await axios.delete("/api/users/" + id);
      await getAdmins();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyContactUser = async (id) => {
    try {
      if (!window.confirm("Are you sure to delete this User?")) {
        return;
      }
      await axios.delete("/api/users/" + id);
      await getContactUsers();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  return {
    user,
    users,
    SuperAdmin,
    SuperAdmins,
    getSuperAdmins,
    getSuperAdmin,
    Admins,
    getAdmins,
    Admin,
    getAdmin,
    ContactUsers,
    getContactUsers,
    ContactUser,
    getContactUser,
    contactAdmins,
    getContactUsersAdmins,
    Profile,
    getupdateProfile,
    updateProfile,
    updateSuperAdmin,
    updateAdmin,
    updateContactUser,
    destroySuperAdminUser,
    destroyAdminUser,
    destroyContactUser,
    errors,
  };
}
