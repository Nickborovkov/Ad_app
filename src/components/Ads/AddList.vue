<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--primary mb-5" style="text-align: center">Ad list</h1>

                <v-card class="mb-5" v-for="ad in ads" :key="ad.id">

                    <v-layout row>

                        <v-flex xs4>
                            <v-img class="rounded-lg" height="150" :src="ad.src"></v-img>
                        </v-flex>

                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :to="'/ad/' + ad.id" color="green">
                                    Info
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-flex>

                    </v-layout>

                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                ads: [
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
                ]
            }
        }
    }
</script>