<template>
<div class="container w-50">
    <div class="mb-3">
        <h1>Crear Boleta</h1>
    </div>
    <div v-if="errors.length" class="alert alert-danger mb-3">
            <h5 v-for="(error, index) in errors" :key="index">{{ error }}</h5>
    </div>
    <form @submit.prevent="savePayable()">
        <div class="mb-3">
            
            <label class="form-label">Tipo de Servicio</label>
            <select class="form-control" aria-placeholder="asdasds" v-model="payable.tipoServicio">
                <option value="" disabled>Seleccione un tipo de servicio</option>
                <option value="Luz">Luz</option>
                <option value="Gas">Gas</option>
                <option value="Internet">Internet</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea type="text" rows="3" placeholder="Edenor S.A" class="form-control" v-model="payable.description"></textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de Vencimiento</label>
            <input type="date" class="form-control" v-model="payable.fechavencimiento">
        </div>
        <div class="mb-3">
            <label class="form-label">Importe de Servicio</label>
            <input type="number" class="form-control" placeholder="1000" v-model="payable.importeServicio">
        </div>
        <div class="mb-3">
            <label class="form-label">Estado</label>
            <select class="form-control" v-model="payable.paymentStatus">
                <option disabled value="">Seleccione un estado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Pagado">Pagado</option>
            </select>
        </div>
        <div class="mb-3">
                <label class="form-label">Barcode</label>
                <input min="0" max="13" placeholder="1234567891011" type="text" class="form-control" v-model="payable.barcode">
        </div>
        <div class="mb-3">
            <button class="btn btn-primary">Guardar</button>
        </div>
    </form>
</div>
    
</template>

<script lang="ts">
import axios from '../api/axios';
import { defineComponent } from 'vue'
import { Payable } from '~/interfaces/Payable'


export default defineComponent({
    setup() {
        
    },
    data() {
        return {
            payable: {} as Payable,
            errors: []  as string[],
        }
    },
    methods:  {
        async savePayable() {
            try {
                this.errors = []
                if(!this.payable.tipoServicio) {
                   return this.errors.push('El tipo de servicio es requerido')
                }
                if(!this.payable.description) {
                  return  this.errors.push('La descripcion es requerida')
                }
                if(!this.payable.fechavencimiento) {
                   return this.errors.push('La fecha de vencimiento es requerida')
                }
                if(!this.payable.importeServicio) {
                   return this.errors.push('El importe de servicio es requerido')
                }
                if(!this.payable.paymentStatus) {
                   return this.errors.push('El estado es requerido')
                }
                if(!this.payable.barcode) {
                   return this.errors.push('El barcode es requerido')
                }
                if(this.payable.barcode.length !== 13) {
                   return this.errors.push('El barcode debe tener 13 digitos')
                }
            
                const barcode = await axios.get(`/payables/barcode/${this.payable.barcode}`)
                if(barcode) {
                    return this.errors.push('El barcode ya existe')
                }
                
                
                const res = await axios.post('/api/payables', this.payable)
                console.log(res)
                this.$router.push({ name: "payables" })
            } catch (error) {
                console.log(error)
            }
            }
        },
    
})
</script>
