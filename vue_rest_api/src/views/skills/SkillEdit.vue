<script setup>
import { onMounted } from 'vue';
import useSkills from '../../composables/skill';

const { skill, getSkill, updateSkill, errors } = useSkills();

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getSkill(props.id));

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Edit Skill</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateSkill($route.params.id)" method="POST">
                            <div class="mb-3">
                                <label for="name">Name</label>
                                <input type="text" v-model="skill.name" :class="{'is-invalid':errors.name}" id="name"
                                    class="form-control" placeholder="Name">
                                    <div v-if="errors.name" class="text-danger">
                                        {{ errors.name[0] }}
                                    </div>
                            </div>
                            <div class="mb-3">
                                <label for="slug">Slug</label>
                                <input type="text" v-model="skill.slug" :class="{'is-invalid':errors.slug}" id="slug"
                                    class="form-control" placeholder="Slug">
                                    <div v-if="errors.slug" class="text-danger">
                                        {{ errors.slug[0] }}
                                    </div>
                            </div>
                            <button type="submit" class="btn btn-sm btn-info text-light">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
