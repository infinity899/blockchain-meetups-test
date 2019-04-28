<template>
    <div class="event-card event-teaser">
        <div class="event-teaser-body">
            <div class="event-teaser-image">
                <img :src="getImgUrl" alt="event cover">
            </div>
            <div class="event-teaser-attendees">
                <p class="event-teaser-attendees-text">Attending</p>
                <p class="event-teaser-attendees-icon"> {{ attendings }}</p>
            </div>
            <div class="event-teaser-title">
                <h3>{{ title }}</h3>
            </div>
            <div class="event-teaser-subtitle">
                <p>{{ subTitle | truncate(38) }}</p>
            </div>
            <div class="event-teaser-description">
                <p> {{ description | truncate(150) }} </p>
            </div>
            <div class="event-teaser-author">
                <p> {{ publisherName }} </p>
            </div>
            <router-link 
                v-on:click.native="storeEventDetails"
                :to="setTitle"
                class="event-teaser-link"
            >Event detail view</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        title: String,
        subTitle: String,
        description: String,
        publisherName: String,
        publisherEmail: String,
        date: String,
        imgCover: String,
        attendings: String,
        city: String,
        address: String
    },
    computed: {
        getImgUrl() {
            // dynamic load of image for each teaser
            return require('../assets/' + this.imgCover);
        },
        setTitle() {
            return this.$route.path + '/' + this.title + '?id='+ this.id;
        }
    },
    methods: {
        storeEventDetails() {
            // store all props from teaser to have all details about event on detail view
            return this.$store.state.eventDetails = this.$props;
        }
    },
    updated: function() {
        this.getImgUrl;
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

.event-teaser {
    height: 392px;
    width: 100%;
    flex-basis: calc(25% - 24px);
    margin: 12px;
    box-shadow: 0 2px 4px 0 #000000;
    position: relative;

    @media screen and (max-width: 1200px) {
        flex-basis: calc(50% - 24px)
    }

    @media screen and (max-width: 600px) {
        flex-basis: 100%
    }

    &-body {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 24px;
        height: 100%;
    }

    &-image {
        margin-left: -16px;
        margin-right: -16px;
        max-height: 105px;
        overflow: hidden;
        min-height: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000000;
    }

    &-link {
        font-size: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9;
    }

    &-attendees {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: -12px;

        &-icon {
            background: $brand-danger;
            color: $text-white;
            border-radius: 35px;
            width: 35px;
            height: 35px;    
            line-height: 35px;
            margin-left: 12px;
        }

        &-text {
            font-size: 14px;
        }
    }

    &-title,
    &-subtitle {
        padding: 12px 0;
        text-align: left;
    }

    &-description {
        text-align: left;
    }

    &-author {
        text-align: right;
        font-weight: 700;
        font-size: 14px;
        padding-top: 24px;
    }
}

</style>


