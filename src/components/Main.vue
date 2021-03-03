<template>
    <v-app>
        <v-container>
            <v-row class="justify-center">
                <h1 class="title font-weight-medium mt-3 mb-4">Tipo de pregunta</h1>
            </v-row>
            <v-card class="mt-3">
                <v-tabs v-model="preg" background-color="blue lighten-5" centered icons-and-text >
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
                <!-- Item1 -->
                <v-tabs-items v-model="preg">
                    <v-tab-item value="open">
                        <v-card flat>
                            <v-card-text>
                                <v-row class="justify-center mt-6 mb-6">
                                    <v-form  v-model="valid" ref="formQuestion">
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" md="12">
                                                    <v-select v-model="select" :hint="`${select.topics}`" :items="items" item-text="topics" item-value="topics" label="Select" persistent-hint return-object single-line ></v-select>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                    <v-text-field v-model="form.question" :rules="questionRules" label="Pregunta" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                    <v-text-field v-model="form.correctAns" :rules="answerRules" label="Respuesta correcta" required></v-text-field>
                                                    <v-text-field v-model="form.dca" :rules="description" label="Descripción de respuesta correcta" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                    <v-text-field v-model="form.answer1" :rules="answerRules" label="Respuesta 1" required></v-text-field>
                                                    <v-text-field v-model="form.da1" :rules="description" label="Descripción de respuesta" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                    <v-text-field v-model="form.answer2" :rules="answerRules" label="Respuesta 2" required></v-text-field>
                                                    <v-text-field v-model="form.da2" :rules="description" label="Descripción de respuesta" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12">
                                                    <v-select v-model="selectLevel" :hint="`${selectLevel.level}`" :items="items2" item-text="level" item-value="level" label="Select" persistent-hint return-object single-line ></v-select>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                    <v-row class="justify-center">
                                                        <v-row align="center" justify="space-around">
                                                            <v-btn :disabled="!valid" @click="save()" tile color="success" >
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
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
                <!-- Item2 -->
                <v-tabs-items v-model="preg">
                    <v-tab-item value="close">
                        <v-card flat>
                             <v-card-text>
                                <v-row class="justify-center mt-6 mb-6">
                                    <v-form  v-model="validForm" ref="formQuestion2">
                                        <v-container> 
                                            <v-row>
                                                <v-col cols="12" md="12">
                                                    <v-select v-model="selectForm2" :hint="`${selectForm2.topics}`" :items="itemsForm2" item-text="topics" item-value="topics" label="Select" persistent-hint return-object single-line ></v-select>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                    <v-text-field v-model="form2.question" :rules="questionRules" label="Pregunta" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12">
                                                    <v-select v-model="selectAns" :hint="`${selectAns.answer}`" :items="items3" item-text="answer" item-value="answer" label="Select" persistent-hint return-object single-line ></v-select>
                                                </v-col>
                                                <v-col cols="12" md="12">
                                                    <v-select v-model="selectLevelForm" :hint="`${selectLevelForm.level}`" :items="itemsForm" item-text="level" item-value="level" label="Select" persistent-hint return-object single-line ></v-select>
                                                </v-col>
                                                 <v-col cols="12" md="12" >
                                                   <v-text-field v-model="form2.dca" :rules="description" label="Descripción de respuesta correcta" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12" >
                                                <v-row class="justify-center">
                                                    <v-row align="center" justify="space-around">
                                                        <v-btn :disabled="!validForm" @click="save2()" tile color="success" >
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
import gql from 'graphql-tag'

    export default {
        data:() => ({
            valid: true,
            validForm: true,
            preg: null,
            jsonF: [],
            form: {
                question: "",
                correctAns: "",
                dca: "",
                answer1: "",
                da1: "",
                answer2: "",
                da2: ""
            },
            form2: {
                question: "",
                dca: ""
            },
            questionRules: [
                v => !!v || 'La pregunta es requerida',
            ],
            answerRules: [
                v => !!v || 'La respuesta es requerida',
            ],
            description: [
                v => !!v || 'La descripción es requerida'
            ],
            
            /* Temas del primer formulario */
            select: { topics: 'Ortografia' },
            
            items: [
                { topics: 'Ortografia' },
                { topics: 'Gramatica' }
            ],
            /* Temas del segundo formulario */
            selectForm2: { topics: 'Ortografia' },
            
            itemsForm2: [
                { topics: 'Ortografia' },
                { topics: 'Gramatica' },
                { topics: 'Ejemplo' }
            ],
            /* Nivel de dificultad formulario uno */
            selectLevel: { level: 'Bajo' },

            items2: [
                { level: 'Alto' },
                { level: 'Medio' },
                { level: 'Bajo' },
            ],
            /* Nivel de dificultad formulario dos */
            selectLevelForm: { level: 'Bajo' },

            itemsForm: [
                { level: 'Alto' },
                { level: 'Medio' },
                { level: 'Bajo' },
            ],
            /* Respuesta falso o verdadero */
            selectAns: { answer: 'Verdadero' },

            items3: [
                { answer: 'Verdadero' },
                { answer: 'falso' }
            ]
        }),

        mounted() {
            if(this.jsonF == "") {
                this.jsonF = "NO HAY FORMATO JSON "
            }
        },
        
        methods: {
           /*  save() {
                const form = this.form;
                var json = JSON.stringify(form);
                this.jsonF = json;
                console.log(json);
            } */
            
            async save() {
                try {
                    const {data} = await this.$apollo.mutate({
                        mutation: gql`
                            mutation($tema: String!, $pregunta: String!, $rc: String!, $drc: String!, $r1: String!, $dr1: String!, $r2: String!, $dr2: String!, $dificultad: String!)
                            {
                                pregunta(tema: $tema, pregunta: $pregunta, rc: $rc, drc: $drc, r1: $r1, dr1: $dr1, r2: $r2, dr2: $dr2, dificultad: $dificultad )
                            }
                        `,
                        variables: {
                            tema: this.select.topics,
                            pregunta: this.form.question,
                            rc: this.form.correctAns,
                            drc: this.form.dca,
                            r1: this.form.answer1,
                            dr1: this.form.da1,
                            r2: this.form.answer2,
                            dr2: this.form.da2,
                            dificultad: this.selectLevel.level
                        }
                    })
                    console.log(data);
                    this.$refs.formQuestion.reset();
                } catch (error) {
                    console.log(error)
                }
            },

            async save2() {
                /* console.log(this.form2.question+ this.form2.dca + this.selectForm2.topics + this.selectAns.answer + this.selectLevelForm.level) */
               try {
                    const {data} = await this.$apollo.mutate({
                    mutation: gql`
                        mutation($tema: String!, $pregunta: String!, $rc: String!, $dificultad: String!, $descripcion: String!)
                        {
                            vf(tema: $tema, pregunta: $pregunta, rc: $rc, dificultad: $dificultad, descripcion: $descripcion)
                        }
                    `,
                    variables: {
                        tema: this.selectForm2.topics,
                        pregunta: this.form2.question,
                        rc: this.selectAns.answer,
                        dificultad: this.selectLevelForm.level,
                        descripcion: this.form2.dca
                    }
                })
                    console.log(data);
               } catch (error) {
                    console.log(error);
               }
            }
        }
    }
</script>