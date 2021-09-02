<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--primary" style="text-align: center">Create New Ad</h1>
                <v-card class="pa-5">
                    <v-form v-model="valid">
                        <v-text-field
                                filled
                                clearable
                                label="Ad title"
                                color="green"
                                v-model="title"
                                type="text"
                                :rules="[v => !!v || `Title is required`]"
                        ></v-text-field>
                        <v-textarea
                                filled
                                clearable
                                label="Ad description"
                                color="green"
                                type="text"
                                v-model="description"
                                auto-grow
                                :rules="[v => !!v || `Description is required`]"
                        ></v-textarea>

                        <v-layout justify-center>
                            <v-btn
                                    elevation="3"
                                    color="green"
                                    raised
                                    large
                            >
                                <v-icon
                                        left
                                        dark
                                >
                                    mdi-cloud-upload
                                </v-icon>
                                Upload </v-btn>
                        </v-layout>

                        <v-layout class="pa-5" justify-center>
                            <img src=""
                                 width="200"
                                 alt="">
                        </v-layout>

                        <v-layout justify-center>
                            <v-switch
                                    v-model="promo"
                                    label="Add to promo"
                                    color="green"
                            ></v-switch>
                        </v-layout>

                        <v-layout justify-center>
                            <v-btn
                                    :disabled="!valid"
                                    elevation="3"
                                    color="green"
                                    raised
                                    large
                                    @click="createAd"
                            >Create Ad</v-btn>
                        </v-layout>

                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                valid: false,
                title: ``,
                description: ``,
                promo: false
            }
        },
        methods: {
            createAd () {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                }
                console.log(ad)
            }
        }
    }
</script>