<template>
    <div>
        <h1 style="text-align: center">Home</h1>
        <v-container>
            <v-carousel class="rounded-lg">
                <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                >
                    <div class="carouselLink">
                        <v-btn class="error" :to="'/ad/' +  item.id">{{item.title}}</v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-container>
        <v-container fluid>
            <v-layout row wrap justify-center>
                <v-flex xs12  md5 lg4  class="mt-3 mb-3" :key="item.id" v-for="item of items">
                    <v-card class="mx-auto"
                            max-width="344">
                        <v-img :src="item.src"
                               height="200px"></v-img>
                        <v-card-title>
                            {{item.title}}
                        </v-card-title>
                        <v-card-subtitle>
                            {{item.description}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green"
                                   outlined :to="'/ad/' + item.id">
                                Open</v-btn>
                            <v-btn color="green"
                                   raised>
                                Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                model: ``,
                items: [
                    {
                        title: `First ad`,
                        description: `First ad description`,
                        promo: false,
                        id: 1,
                        src: 'http://desktopwallpapers.org.ua/pic/201304/800x600/desktopwallpapers.org.ua-26348.jpg',
                    },
                    {
                        title: `Second ad`,
                        description: `Second ad description`,
                        promo: true,
                        id: 2,
                        src: 'https://img2.goodfon.ru/original/800x480/b/62/tekstura-linii-cveta-oboi.jpg',
                    },
                    {
                        title: `Third ad`,
                        description: `Third ad description`,
                        promo: true,
                        id: 3,
                        src: 'https://wallscloud.net/uploads/cache/2775698916/smooth-brown-textured-LZyA-1024x576-MM-90.jpg',
                    },
                    {
                        title: `Fourth ad`,
                        description: `Fourth ad description`,
                        promo: false,
                        id: 4,
                        src: 'https://cdn.pixabay.com/photo/2017/03/14/16/57/silver-2143730_960_720.jpg',
                    },
                    {
                        title: `Fifth ad`,
                        description: `Fifth ad description`,
                        promo: true,
                        id: 5,
                        src: 'https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1612504380_103-p-serii-fon-razmitii-fon-124.jpg',
                    },
                    {
                        title: `Sixth ad`,
                        description: `Sixth ad description`,
                        promo: false,
                        id: 6,
                        src: 'https://i.ytimg.com/vi/4KgI_dSjcg8/maxresdefault.jpg',
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .carouselLink{
        position: absolute;
        bottom: 50px;
        left: 50%;
        background-color: rgba(0,0,0,.3);
        transform: translate(-50%, 0);
        padding: 10px 20px;
        -webkit-border-radius: 10px 10px 0 0;
        -moz-border-radius: 10px 10px 0 0;
        border-radius: 10px 10px 0 0;
    }
</style>