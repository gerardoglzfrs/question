<template>
    <v-app>
        <v-container>
            <v-row class="justify-center">
                <h1 class="title font-weight-medium mt-3 mb-4">Tipo de pregunta</h1>
            </v-row>
            <v-card class="mt-3">
                <v-tabs
                v-model="preg"
                background-color="blue lighten-5"
                centered
                icons-and-text
                >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#open">
                        Abiertas
                        <span><v-icon>arrow_back_ios</v-icon></span>
                    </v-tab>

                    <v-tab href="#close">
                        Cerradas
                        <span><v-icon>arrow_forward_ios</v-icon></span>
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="preg">
                    <v-tab-item value="open">
                        <v-card flat>
                            <v-card-text>
                                <v-row class="justify-center mt-6 mb-6">
                                   <v-row>
                                        <v-col cols="6" sm="6" md="6" lg="6">
                                            <v-form  v-model="valid">
                                                <v-container>
                                                    <v-row>
                                                        <v-col
                                                        cols="12"
                                                        md="12"
                                                        >
                                                        <v-text-field
                                                            v-model="question"
                                                            :rules="questionRules"
                                                            label="Pregunta"
                                                            required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col
                                                        cols="12"
                                                        md="12"
                                                        >
                                                        <v-text-field
                                                            v-model="answere"
                                                            :rules="answerRules"
                                                            label="Respuesta"
                                                            required
                                                        ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                        cols="12"
                                                        md="12"
                                                        >
                                                        <v-row class="justify-center">
                                                            <v-row
                                                                align="center"
                                                                justify="space-around"
                                                            >
                                                                <v-btn
                                                                tile
                                                                color="success"
                                                                >
                                                                <span>
                                                                    <v-icon left>
                                                                        save
                                                                    </v-icon>   
                                                                </span>
                                                                Guardar
                                                                </v-btn>
                                                            </v-row>
                                                        </v-row>
                                                        </v-col>
                                                    </v-row>
                                                    </v-container>
                                            </v-form>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" lg="6" class="blue-grey lighten-5">
                                            <v-row class="justify-center">
                                                <h3 style="color: black;" class="mt-3">JSON</h3>
                                            </v-row>
                                            <div class="mt-6">
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dignissimos a eligendi magni ullam eos? 
                                                    Voluptates nemo, at beatae reiciendis sapiente maxime vel!</p>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>

                <v-tabs-items v-model="preg">
                    <v-tab-item value="close">
                        <v-card flat>
                            <v-card-text>
                                <v-row class="justify-center mt-6 mb-6">
                                    
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        data:() => ({
            valid: false,
            preg: null,
            questionRules: [
                v => !!v || 'La pregunta es requerida',
            ],
            answerRules: [
                v => !!v || 'La respuesta es requerida',
            ],
        })
    }
</script>