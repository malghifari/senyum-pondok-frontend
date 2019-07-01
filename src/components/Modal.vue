<template>
    <b-modal 
        id="bv-modal-example"
        centered
        :body-bg-variant="variant"
        body-text-variant="light"
        hide-header
        ok-only
        @ok="handleOk"
        button-size='sm'
        footer-class='p-2'
        >
        <h5 style="text-align: center">
            {{message}}
        </h5>
    </b-modal>
</template>

<script>
export default {
    props: ['message', 'variant', 'handleOk'],
};
</script>