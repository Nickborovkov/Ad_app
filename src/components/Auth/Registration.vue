<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-toolbar color="green" class="rounded-t-lg">
                    <v-toolbar-title>Registration</v-toolbar-title>
                </v-toolbar>
                <v-card class="pa-5">
                    <v-form v-model="valid">
                        <v-text-field
                                filled
                                clearable
                                label="Email"
                                color="green"
                                prepend-inner-icon="mdi-account"
                                hint="mail@mail.com"
                                v-model="email"
                                type="email"
                                aria-autocomplete
                                :rules="emailRules"
                        ></v-text-field>
                        <v-text-field
                                filled
                                clearable
                                label="Password"
                                :counter="6"
                                prepend-inner-icon="mdi-lock"
                                color="green"
                                type="password"
                                v-model="password"
                                :rules="passwordRules"
                        ></v-text-field>
                        <v-text-field
                                filled
                                clearable
                                label="Confirm password"
                                :counter="6"
                                prepend-inner-icon="mdi-lock"
                                color="green"
                                aria-autocomplete
                                type="password"
                                v-model="confirmPassword"
                                :rules="confirmPasswordRules"
                        ></v-text-field>
                        <v-layout justify-end>
                            <v-btn
                                    :disabled="!valid"
                                    elevation="3"
                                    color="green"
                                    raised
                                    large
                                    @click="onSubmit"
                            >Create account</v-btn>
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
                email: ``,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                password: ``,
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 6 || 'Name must be more than 6 characters',
                ],
                valid: false,
                confirmPassword: ``,
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password || `Passwords don't match`
                ],
            }
        },
        methods: {
            onSubmit () {
                const user = {
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                }
                console.log(user)
            }
        }
    }
</script>