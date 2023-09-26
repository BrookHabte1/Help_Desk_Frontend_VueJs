<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components

// tooltip
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="overflow-hidden mb-5">
            <div class="row">
              <div class="col-lg-8">
                <div class="card-body">
                  <h3>Get in touch</h3>
                  <p>If you have any questions or need help, please fill out the form below. We do our best to respond as soon as possible.</p>
                  <div class="container">
                    <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                      <li class="mb-0 ms-3 text-dark" v-for="(error, index) in this.errorList" :key="index">
                        {{ error[0] }}
                      </li>
                    </ul>
                    <div class="row">
                      <div class="col">
                        <div class="mb-2">
                          <label class="text-dark" for="">Contact Name</label>
                          <input type="text shadow" v-model="model.question.ContactName" class="form-control" />
                        </div>                        
                        <div class="mb-2">
                          <label class="text-dark" for="">Company Name</label>
                          <input type="text" v-model="model.question.CompanyName" class="form-control shadow" />
                        </div>
                      </div>
                      <div class="col">
                        <div class="mb-2">
                          <label class="text-dark" for="">Contact Person Email</label>
                          <input type="text" v-model="model.question.ContactPersonEmail" class="form-control shadow" />
                        </div>
                        <div class="mb-2">
                          <label class="text-dark" for="">Telephone Number</label>
                          <input type="text" v-model="model.question.TelephoneNumber" class="form-control " />
                        </div>
                      </div>
                      <div class="mb-3">
                        <label class="text-dark" for="">Message</label>
                        <textarea type="text" v-model="model.question.Message" class="form-control" style="resize:none; height:100px"/>
                      </div>
                    </div>
                    <div>
                      <button type="button" @click="saveQuestion" class="full-width-button btn btn-dark" style="border-radius: 2px;">Send Message</button>
                    </div>
                  </div>
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "questionCreate",
  data() {
    return {
      errorList: '',
      model: {
        question: {
          ContactName: '',
          ContactPersonEmail: '',
          CompanyName: '',
          TelephoneNumber: '',
          Message: '',
        }
      }
    }
  },
  methods: {
    saveQuestion() {

      var mythis = this;
      axios.post("http://127.0.0.1:8000/api/questions", this.model.question)
        .then( res => {
          console.log(res.data)
          alert(res.data.message);
         this.model.question = {
            ContactName: '',
            ContactPersonEmail: '',
            CompanyName: '',
            TelephoneNumber: '',
            Message: ''
          }
          this.errorList = '';
        })
        .catch(function (error) {
   if (error.response) {
    if (error.response.status === 422) {
      mythis.errorList = error.response.data.errors;
    }
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
});
    }
  },
};
</script>

<style scoped>
p{
  margin-right: -200px; /* Adjust the value as needed */
}
input.form-control {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: box-shadow 0.3s ease;
}

input.form-control:focus {
  outline: none;
  border-color: #007bff; /* Updated border color on focus */
  box-shadow: 0 0 8px rgba(0, 74, 153, 0.5);
}

/* Error state */
.is-invalid input.form-control {
  border-color: #dc3545;
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.1);
}

.invalid-feedback {
  color: #dc3545;
}

textarea.form-control {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: box-shadow 0.3s ease;
}

textarea.form-control:focus {
  outline: none;
  border-color: #007bff; /* Updated border color on focus */
  box-shadow: 0 0 8px rgba(0, 74, 153, 0.5);
}

/* Error state */
.is-invalid textarea.form-control {
  border-color: #dc3545;
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.1);
}
</style>
