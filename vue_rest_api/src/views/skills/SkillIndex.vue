<script setup>
import useSkills from '../../composables/skill';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const { skills, getSkills, destroySkill } = useSkills();

onMounted(() => getSkills());
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h2>Skills
                            <RouterLink class="float-end btn btn-sm btn-primary mt-2" to="/skills/create">New Skill</RouterLink>
                        </h2>
                    </div>
                    <div class="card-body table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="skill in skills" :key="skill.id">
                                    <td class="text-nowrap">{{ skill.name }}</td>
                                    <td class="text-nowrap">{{ skill.slug }}</td>
                                    <td class="text-nowrap">
                                        <RouterLink :to="`/skills/edit/` + skill.id" class="btn btn-sm btn-success">Edit</RouterLink>
                                        <button type="button" @click="destroySkill(skill.id)" class="btn btn-sm btn-danger ms-1">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
