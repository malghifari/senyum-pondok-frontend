<template>
    <div>

        <b-input-group
        prepend="Rp"
        >
        <b-input
            v-model="displayValue" 
            @blur="isInputActive = false" 
            @focus="isInputActive = true"
            id="input-6a" 
            placeholder="Jumlah infaq Anda"
            style="border-radius: 3px; font-size: 0.9rem; border-top-left-radius: 0; border-bottom-left-radius: 0;"
            >
        </b-input>
        </b-input-group>
    </div>
</template>

<script>
export default {
    props: ["value"],
    data: function() {
        return {
            isInputActive: false
        }
    },
    computed: {
        displayValue: {
            get: function() {
                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return this.value.toString()
                } else {
                    // User is not modifying now. Format display value for user interface
                    let val = (this.value/1).toFixed(2).replace('.', ',')
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
            },
            set: function(modifiedValue) {
                // Recalculate value after ignoring "$" and "," in user input
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
                // Ensure that it is not NaN
                if (isNaN(newValue)) {
                    newValue = 0
                }
                // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                // $emit the event so that parent component gets it
                this.$emit('input', newValue)
            }
        }
    }
}
</script>

<style scoped>
    .input-group-text {
        border-radius: 3px; font-size: 0.9rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
</style>
