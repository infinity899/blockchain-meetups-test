<template>
    <div>
        <h3>{{ title }}</h3>
        <router-link to="/event/eventname">Event detail view</router-link>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
    
}
</script>

<style lang="scss">

</style>


