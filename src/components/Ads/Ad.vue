<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1 class="text--primary mb-5" style="text-align: center">Ad</h1>

                <v-card>
                    <v-img class="rounded-lg" height="300"
                           :src="`https://img2.goodfon.ru/original/800x480/b/62/tekstura-linii-cveta-oboi.jpg`"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">Lorem ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad fugit incidunt, laudantium natus pariatur quasi quibusdam saepe soluta voluptatum.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green">Edit</v-btn>
                        <v-btn color="green">Buy</v-btn>
                    </v-card-actions>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {

    }
</script>