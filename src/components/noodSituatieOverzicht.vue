<template>
    <div class="NoodSituatieOverzichtInhoud">
                
        <h2 class="tile__heading headingM">Noodsituatie gemeld</h2>
        
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
</style>