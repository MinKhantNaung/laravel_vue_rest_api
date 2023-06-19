<script setup>
import { reactive } from 'vue';
import useSkills from '../../composables/skill';

const { storeSkill, errors } = useSkills();

const form = reactive({
    name: '',
    slug: ''
})
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Add New Skill</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="storeSkill(form)" method="POST">
                            <div class="mb-3">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" :class="{'is-invalid': errors.name}" id="name" class="form-control" placeholder="Name">
                                <div v-if="errors.name" class="text-danger">
                                    {{ errors.name[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="slug">Slug</label>
                                <input type="text" v-model="form.slug" :class="{'is-invalid': errors.slug}" id="slug" class="form-control" placeholder="Slug">
                                <div v-if="errors.slug" class="text-danger">
                                    {{ errors.slug[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-sm btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
