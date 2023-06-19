import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

export default function useSkills() {
    const skills = ref([]);
    const skill = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getSkills = async () => {
        const response = await axios.get('skills');
        skills.value = response.data.skills;
    }

    const getSkill = async (id) => {
        const response = await axios.get('skills/' + id);
        skill.value = response.data.skill;
    }

    const storeSkill = async (data) => {
        try {
            await axios.post('skills', data);
            await router.push({ name: 'skillIndex' });
        } catch (error) {
            if (error.response.status === 400) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateSkill = async (id) => {
        try {
            await axios.put('skills/' + id, skill.value);
            await router.push({ name: 'skillIndex' });
        } catch (error) {
            if (error.response.status === 400) {
                errors.value = error.response.data.errors
            }
        }
    }

    const destroySkill = async (id) => {
        if (confirm('Are you sure?')) {
            await axios.delete('skills/' + id);
            await getSkills();
        }
    }

    return {
        skills,
        skill,
        errors,
        getSkills,
        getSkill,
        storeSkill,
        updateSkill,
        destroySkill,
    };
}
