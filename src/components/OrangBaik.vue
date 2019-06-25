<template>
    <b-col class="orang-baik" sm="4">
        <h2>
            Hai #OrangBaik
        </h2>
        <p class="greeting">
            Selamat bergabung di Pondok Senyum Indonesia, rumah bagi adik-adik istimewa dari pelosok Jawa Barat
        </p>
    </b-col>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .orang-baik {
        display: none;
        padding: 50px;
        padding-top: 120px;
    }

    .greeting {
        margin-top: 20px;
        font-size: 1em;
    }

    @media screen and (min-width: 540px) {
        .orang-baik {
            display: block; 
            font: 400 .9375rem Open Sans,sans-serif; 
            font-weight: 300!important;
        }
        .greeting {
            width: 50%;
        }
    }
</style>
