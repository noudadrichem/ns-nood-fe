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

        <div v-if="!verbonden">
            <p>Wil je directe verbinding met de conducteur? true</p>
            <button @click="startSpraakverbinding" class="btn spraakVerbinding">Start Spraakverbinding</button>
        </div>
        <div v-else>
            <NoodSituatieGesprek @close="verbreekVerbinding"/>
        </div>

    </div>
</template>

<script>
    import Hoofd from "@/components/heading"
    import Footer from "@/components/footer"
    import axios from 'axios'
    
    import NoodSituatieGesprek from '@/components/noodSituatieGesprek'
    

    export default {
        data: () => ({
            noodgeval: "Test",
            verbonden: false
        }),
        methods: {
            startSpraakverbinding() {
                console.log('Spraakverbinding wordt gestart')
                this.$set(this, 'verbonden', true)
            },
            verbreekVerbinding() {
                this.$set(this, 'verbonden', false)
                console.log('spraak verbinding kapot')
            }
        },
        mounted() {
            setTimeout(e => {
                this.$set(this, 'accepted', true)
            }, 2000)
        }, 
        components: {
            NoodSituatieGesprek
        }
    }
</script>

<style lang="css">
    .NoodSituatieOverzichtInhoud {
        padding:0px 24px;
    }
    .btn.spraakVerbinding {
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