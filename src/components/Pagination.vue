<template>
    <b-container class="mt-5">
        <h1>PAGINATION</h1>
        <b-input placeholder="Filtrar" v-model="filtro"></b-input>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
        <b-col sm="5" md="6" class="my-1">
            <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4" label-cols-lg="3"
                label-align-sm="right" label-size="sm" class="mb-0">
                <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm"></b-form-select>
            </b-form-group>
        </b-col>
        <b-table id="my-table" :items="personas" :per-page="perPage" :current-page="currentPage" :fields="fields"
            :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small :filter="filtro"
            @filtered="onFiltered"></b-table>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                aria-controls="my-table"></b-pagination>
        </div>
    </b-container>
</template>
   
<script>
import personas from '../services/Persona';

export default {
    data() {
        return {
            filtro: null,
            sortBy: "name",
            sortDesc: false,
            perPage: 5,
            currentPage: 1,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            personas: [],
            rows: 0,
            fields: [
                { key: "name", label: "Nombre", sortable: true },
                { key: "firstname", label: "Apellido Paterno", sortable: true },
                { key: "lastname", label: "Apellido Materno", sortable: true },
                { key: "address", label: "Direccion", sortable: true },
                { key: "birthday", label: "Fech. Nac.", sortable: true },
                { key: "email", label: "Email", sortable: true },
                { key: "email", label: "Email", sortable: true },
            ],
        };
    },
    mounted() {
        this.obtenerPersonas();
    },
    methods: {
        async obtenerPersonas() {
            try {
                const data = await personas.obtenerPersonasPaginadas(
                    parseInt(this.currentPage),
                    parseInt(this.perPage),
                    this.filtro
                );
                this.personas = data.content;
                this.rows = data.totalElements;
            } catch (error) {
                console.error(error);
            }
        },
        onFiltered(filteredItems) {
            this.currentPage = 1;
            this.rows = filteredItems.length;
        },
    }
}
</script>

<style>
.div {
    padding: 30px;
}
</style>