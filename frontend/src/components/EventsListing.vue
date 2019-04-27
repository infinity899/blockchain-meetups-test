<template>
    <div>
        <div class="city-cover">
            <h3>{{ filteredCity[0].city_image}}</h3>
            <img :src="getImgUrl" alt="">
        </div>
        <h3></h3>
        <EventTeaser 
            v-for="event in filteredTeaser" v-bind:key="event.id"
            :title="event.event_title"
            :subTitle="event.event_subtitle"
            :description="event.event_description"
            :publisherName="event.event_publisher_name"
            :publisherEmail="event.event_publisher_email"
            :date="event.event_date"
            :imgCover="event.event_cover"
            :attendings="event.event_attendings"
            :city="event.event_city"
            :address="event.event_address"
        />
    </div>
</template>

<script>
import EventTeaser from './EventTeaser.vue'
import eventsJSON from '../api/events.json'
import cityJSON from '../api/cities.json'

export default {
    data() {
        return {
            eventsJSON: eventsJSON['events'],
            cityJSON: cityJSON['cities']
        }
    },
    components: {
        EventTeaser
    },
    computed: {
        getImgUrl() {
            // dynamic change of image for each city
            return require('../assets/' + this.filteredCity[0].city_image);
        },
        filteredTeaser() {
            // filter teasers by city
            let that = this;
            return this.eventsJSON.filter(function (event) { 
                    return event.event_city.toLowerCase() === that.$store.state.city.toLowerCase();
                });
        },
        filteredCity() {
            let that = this;
            return this.cityJSON.filter(function (city) { 
                    return city.city.toLowerCase() === that.$store.state.city.toLowerCase();
                });
        }
    },
    updated: function() {
        this.getImgUrl;
    }
}
</script>

<style lang="scss">

</style>


