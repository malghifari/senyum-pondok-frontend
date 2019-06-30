<template>
<div id="main-menupage">
	<ul style="list-style: none;">
	  <li><i class="material-icons" style="font-size:30px;color:white;padding: 6px;">assignment_turned_in</i>Konfirmasi Infaq</li>
	  <li>Histori Infaq</li>
	  <li>Laporan Dana</li>
      <li>Pengaturan</li>
      <li id="keluar">Keluar</li>
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
    #keluar {
        position: relative;
        bottom: 0;
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
            width: 100%;
    	}
        li {
            padding: 20px;
        }
    }
</style>