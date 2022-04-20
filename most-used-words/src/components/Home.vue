<template>
<v-container-fluid>
    <div class='pills'>
        <Pill v-for="word in groupWords" :key="word.name" :name="word.name" :amount="word.amount"/>
    </div>
</v-container-fluid>
  
</template>

<script>
import Pill from './Pill'

export default {
    components: {
        Pill,
    },
    data: function () {
        return{
            groupWords:[
                {name: 'i', amount:1200},
                {name: 'you', amount:900},
                {name: 'he', amount:800},
            ]
        }
    }
}
</script>

<style>

</style>