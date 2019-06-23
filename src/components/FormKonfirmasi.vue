<template>
  <div>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.namaRekening"
          required
          placeholder="Nama Rekening Anda"
        ></b-form-input>
      </b-form-group>

      <b-form-group v-model="number" id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.noRekening"
          required
          placeholder="Nomor Rekening Anda"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.namaBank"
          :options="banks"
          required
        ></b-form-select>
      </b-form-group>

    <b-form-file v-model="form.file" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          namaRekening: '',
          noRekening: '',
          namaBank: null,
          file: null
        },
        banks: [{ text: 'Pilih Nama Bank Anda', value: null }, 'BCA','BCA Syariah','BII','BII Syariah','BNI','BNI Syariah','BRI','BRI Syariah','BTN','Bank DKI','Bank DKI Syariah','Bank Jabar','Bank Jateng','Bank Jateng Syariah','Bukopin','CIMB Niaga','Danamon','Danamon Syariah','HSBC','Mandiri','Mandiri Syariah','Mayapada','Maybank Indonesia','Mega','Mega Syariah ','Muamalat','OCBC NISP','Panin Bank','Permata','Woori Saudara'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>

<style>
    div {
        width: 90%;
    }
</style>