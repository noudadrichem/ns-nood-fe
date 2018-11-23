<template>
    <div class="NoodSituatieOverzichtInhoud">
                
        <h2 class="tile__heading headingM">Noodsituatie gemeld</h2>

        <div v-if="accepted" class="message good">
            De conducteur is op de hoogte gesteld.
        </div>
        
        <div class="infoText" >
            <p>Noodsituatie is doorgegeven aan de conducteur op jouw trein, alsmede de NS Veiligheidscentrale.</p>
            <p>Je hebt het volgende doorgegeven <i><ins>{{ noodgeval }}</ins></i></p>
        </div>
        
        <div>
            <p>Wil je directe verbinding met de conducteur?</p>
        </div>
        <button @click="startSpraakverbinding" class="btn spraakverbinding">Start spraakverbinding</button>
    </div>
</template>

<script>
    import Hoofd from "@/components/heading"
    import Footer from "@/components/footer"
    import axios from 'axios'
    
    export default {
        data: () => ({
            noodgeval: "Medisch noodgeval TS8749",
            accepted: false
        }),
        components: {
            Hoofd,
            Footer
        },
        methods: {
            startSpraakverbinding() {
                console.log('Spraakverbinding wordt gestart')
                const endpoint = ``
                axios.post(endpoint)
                    .then(res => {
                        console.log(res)
                    })
            }
        },
        mounted() {
            setTimeout(e => {
                this.$set(this, 'accepted', true)
            }, 2000)
        }
    }
</script>

<style lang="css">
    .NoodSituatieOverzichtInhoud {
        padding:0 24px;
    }
    .btn.spraakverbinding {
        background-color: #dc001f;
        display: inline-block;
        position: relative;
        height: 2.8125rem;
        vertical-align: top;
        min-width: 7.5rem;
        font-weight: 400;
        white-space: nowrap;
        color: #fff;
        -webkit-box-shadow: inset 0 -0.125rem 0 #910015;
        box-shadow: inset 0 -0.125rem 0 #910015;
        text-align: center;
        line-height: 1.5625rem;
        font-size: 1rem;
        border: none;
        text-decoration: none;
        -webkit-transition: -webkit-box-shadow .15s ease-in-out;
        transition: -webkit-box-shadow .15s ease-in-out;
        transition: box-shadow .15s ease-in-out;
        transition: box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
        padding: .625rem 1.125rem;
    }
    p {
        margin-top: 24px;
    }

    .message.good {
        padding: 20px;
        background-color: rgba(76, 175, 80, .25);
        border: 1px solid rgb(76, 175, 80);
        color: hsl(122, 39%, 30%);
        opacity: 0.83;
        transition: opacity 0.6s;
        margin-bottom: 15px;
        font-size: 14px;
    }
</style>