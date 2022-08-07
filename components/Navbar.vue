<template>
     <div class="container">
    <header class="justify-content-center py-3 mb-4 border-bottom">
        <div class="row">
            <div class="col">
                <a href="/" class="text-dark text-decoration-none">
                  <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                  <span class="fs-4">NewCombinVueChallenge</span>
                </a>
            </div>
            <div class="col">
                <ul class="nav nav-pills">
                  <li class="nav-item"><NuxtLink :to="{name: 'createpayable'}" class="nav-link" activeClass="active" >Crear Boleta</NuxtLink></li>
                  <li class="nav-item"><NuxtLink :to="{name: 'create-transaction'}" class="nav-link" activeClass="active" >Pagar Boleta</NuxtLink></li>
                  <li class="nav-item"><NuxtLink :to="{name: 'payables'}" class="nav-link" activeClass="active" >Boletas</NuxtLink></li>
                  <li class="nav-item"><NuxtLink :to="{name: 'transactions'}" class="nav-link" activeClass="active" >Pagos</NuxtLink></li>
                </ul>
            </div>
        </div>

    </header>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
