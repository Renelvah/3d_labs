<template>
  <div class="laba-block">
    <a-scene>
      <a-camera id="camera">
        <a-sky color="#262626"/>
        <a-entity cursor position="0 0 -1"
                  geometry="primitive: sphere; radius: 0.005"
                  material="color: #000000; shader: flat; opacity: 0.5"/>
      </a-camera>
      <a-gltf-model
          id="model"
          :src="require('../assets/totoro.glb')"
          position="0 0 -10"
          rotation="0 0 0"
          scale="0.3 0.3 0.3"
      />
    </a-scene>
  </div>
</template>

<script>
import Vue from 'vue'

require('aframe');
require('aframe-extras.ocean');
require('aframe-particle-system-component');
require('aframe-extras.tube');
require('aframe-mountain-component');
require('aframe-text-geometry-component');


export default Vue.extend({
  name: 'lab',
})
</script>

<style lang="scss" scoped>

</style>
