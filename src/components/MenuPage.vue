<template>
<div id="main-menupage">
	<ul style="list-style: none;">
	  <li>Konfirmasi Infaq</li>
	  <li>Histori Infaq</li>
	  <li>Laporan Dana</li>
	  <li>Pengaturan</li>
	</ul>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
    #main-menupage {
    	text-align: center;
    	background-color: #D71149;
    }
    ul {
    	font-size: 20px;
    	color: #fff;
    	padding: 0px;
    }
    li {
    	padding: 5px 0px;
    	border-bottom: 1px solid #fff;
    	border-top: 1px solid #fff;
    }

    @media screen and (min-width: 540px) {
    	#main-menupage {
    		height: 100%;
    		width: 20%;
    	}
    	ul {
    		font-size: 26px;
    	}
    	li {
    		padding: 10px 0px;
    	}
    }
</style>