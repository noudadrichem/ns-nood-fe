<template>
    <div class="NoodSituatieGesprekInhoud">
                 
        <div class="gesprek">
            <p>Spraakverbinding met <br><i><ins>{{ conducteur }}</ins></i></p>
        </div>
        <button @click="$emit('close')" class="btn verbreekVerbinding">Verbreek verbinding</button>
    </div>
</template>

<script>

    export default {
        data: () => ({
            noodgeval: "Test",
            conducteur: "Conducteur TS 8749"
        }),
        methods: {
            verbreekSpraakverbinding() {
                this.$emit('close')
                // this.verbreekVerbinding()
            }
        }
    }
</script>

<style lang="css">
    .NoodSituatieGesprekInhoud {
        padding:0px 0px;
    }
    .btn.verbreekVerbinding {
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