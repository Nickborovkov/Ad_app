<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--primary" style="text-align: center">Orders</h1>
                <v-card>
                    <v-list
                            flat
                            subheader
                            three-line
                    >
                            <v-list-item :key="order.id" v-for="order in orders">
                                <template>
                                    <v-list-item-action>
                                        <v-checkbox  :input-value="order.done"
                                                @change="markDone(order)"
                                                color="green">

                                        </v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>{{order.name}}</v-list-item-title>
                                        <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-btn primary
                                           color="green"
                                           :to="'/ad/' + order.adId"
                                    >
                                        Open
                                    </v-btn>

                                </template>
                            </v-list-item>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                orders: [
                    {
                        id: 1,
                        name: `Nick`,
                        phone: `8-999-777-21-14`,
                        adId: `123`,
                        done: false,
                    }
                ]
            }
        },
        methods : {
            markDone (order) {
                order.done = true
            }
        }
    }
</script>