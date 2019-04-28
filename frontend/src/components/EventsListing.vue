<template>
    <div class="main-container">
        <div class="city-cover">
            <img :src="getImgUrl" alt="">
        </div>
        <div class="event-teaser-listing">
            <h3 class="container-subtitle">Discover these events near you:</h3>
            <EventTeaser 
                v-for="event in filteredTeaser[chunkFilteredIndex]" v-bind:key="event.id"
                :id="event.id"
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
            <div class="pagination">
                <button v-on:click="prev('filtered')" :disabled="chunkFilteredIndex === 0">&lt;</button>
                <button v-on:click="next('filtered')" :disabled="chunkFilteredIndex === filteredTeaser.length - 1">></button>
            </div>
        </div>
        <div class="event-teaser-listing">
            <h3 class="container-subtitle">All events</h3>
                <EventTeaser 
                    v-for="event in chunkedAllEvents[chunkAllIndex]" v-bind:key="event.id"
                    :id="event.id"
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
            <div class="pagination">
                <button v-on:click="prev('all', $event)" :disabled="chunkAllIndex === 0">&lt;</button>
                <button v-on:click="next('all', $event)" :disabled="chunkAllIndex === chunkedAllEvents.length - 1" >></button>
            </div>
        </div>
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
            cityJSON: cityJSON['cities'],
            chunkedAllEvents: [],
            chunkedFilteredEvents: [],
            chunkAllIndex: 0,
            chunkFilteredIndex: 0,
            currentCity: ''
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
            let filteredArr = this.eventsJSON.filter(function (event) { 
                return event.event_city.toLowerCase() === that.$store.state.city.toLowerCase();
            });
            return this.chunk(filteredArr, 4); 
        },
        filteredCity() {
            let that = this;
            return this.cityJSON.filter(function (city) { 
                return city.city.toLowerCase() === that.$store.state.city.toLowerCase();
            });
        }
    },
    methods: {
        next(which, $event) {
            if (which == 'all') {
                if (this.chunkAllIndex < this.chunkedAllEvents.length - 1) {
                    this.chunkAllIndex++;
                }
            } else {
                if (this.chunkFilteredIndex < this.filteredTeaser.length - 1)
                    this.chunkFilteredIndex++;
            }
        },
        prev(which, $event) {
            if (which == 'all') {
                if (this.chunkAllIndex > 0)
                    this.chunkAllIndex--;
            } else {
                if (this.chunkFilteredIndex > 0)
                    this.chunkFilteredIndex--;
            }
        },
        chunk(arr, len) {
          // function for splitting arrays to render only 4 events at a time
          var chunks = [],
              i = 0,
              n = arr.length;
          while (i < n) {
            chunks.push(arr.slice(i, i += len));
          }
          return chunks;
        }
    },
    updated: function() {
        // reset indexes in case of city change so lists will render from begining for each city
        if(this.currentCity !== this.$store.state.city) {
            this.chunkAllIndex = 0;
            this.chunkFilteredIndex = 0;
            this.currentCity = this.$store.state.city;
        }
    },
    mounted: function() {
        this.currentCity = this.$store.state.city;
        this.chunkedAllEvents = this.chunk(this.eventsJSON, 4);
    }
}
</script>

<style lang="scss">
@import '../scss/variables';

.city-cover {
    max-height: 245px;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.event-teaser-listing {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: $color-white;
    justify-content: flex-start;
    padding: 24px;
}

.container-subtitle {
    width: 100%;
    text-align: left;
    margin: 12px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
        border-radius: 4px;
        margin:0 12px;
        outline: none;
        padding: 8px;
        font-size: 16px;
        cursor: pointer;
    }
}

</style>


