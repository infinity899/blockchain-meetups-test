<template>
    <div class="event main-container">
        <div class="go-back-button">
            <a @click="$router.go(-1)">
                <img src="../assets/arrow_back.png" alt="">
            </a>
        </div>
        <div class="city-cover">
            <img :src="getImgUrl" alt="">
        </div>
        <div class="event-container">
            <div class="event-title">
                <h1>{{eventDetails[0].event_title}}</h1>
            </div>
            <div class="event-date">
                <p>{{eventDetails[0].event_date}}</p>
            </div>
            <div class="event-address">
                <a href=""> <img src="../assets/pin.svg" alt="ping"> <p>{{eventDetails[0].event_address}}</p> </a>
            </div>
            <div class="event-subtitle">
                <p>{{eventDetails[0].event_subtitle}}</p>
            </div>
            <div class="event-description">
                <p>{{eventDetails[0].event_description}}</p>
            </div>
            <div class="event-contact">
                <p>Contact the organizer:</p>
                <p class="event-contact-email">{{eventDetails[0].event_publisher_email}}</p>
            </div>
            <div class="event-registration">
                <button class="btn btn-primary">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
import eventsJSON from '../api/events.json'

export default {
    data() {
        return {
            eventsJSON: eventsJSON['events'],
            eventDetails: {}
        }
    },
    props: {
    },
    computed: {
        getImgUrl() {
            // dynamic change of image for each city
            return require('../assets/' + this.eventDetails[0].event_cover);
        }
    },
    created() {
        // save event ID from route
        var eventID = this.$route.fullPath.match(/(\?id=)(.*)/)[2]; 
        // get event details based on ID
        this.eventDetails = this.eventsJSON.filter(function (event) { 
            return event.id === eventID;
        });
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

.event-container {
    background-color: $text-white;
    padding: 0 12px;
    border: 1px solid $color-blue;
    border-top: none;

    @media screen and (min-width: 600px) {
         padding: 0 128px;
    }
}

.event {    
    &-title {
        padding: 50px 0;
        h1 {
            font-weight: 700;
        }
    }

    &-date {
        font-size: 40px;
    }

    &-address {
        padding: 24px 0;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Helvetica;
            font-size: 20px;
            color: $color-blue;
            letter-spacing: 0;
            text-align: center;
        }
        img {
            margin-right: 8px;
            width: 15px;
            height: 15px;
        }
    }

    &-subtitle {
        padding: 24px 0;
    }

    &-contact {
        padding: 24px 0;

        &-email {
            margin-top: 8px;
            color: $color-blue;
        }
    }

    &-registration {
        padding: 42px 0;
    }
}

.go-back-button {
    text-align: left;
    padding: 24px 0;
    a {
        cursor: pointer;
    }
    img {
        width: 70px;
        height: 100%;
    }
}

</style>


