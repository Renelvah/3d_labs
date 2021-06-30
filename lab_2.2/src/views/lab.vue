<template>
  <div class="laba-block">
    <a-scene>
      <a-camera id="camera">
        <a-sky
            id="sky"
            :src="require('../assets/skybox.jpg')"
        />
        <a-light type="point" light="type:directional; castShadow:true" color="white" position="-10 25 5"/>
        <a-light type="ambient" color="white" intensity="0.5"/>

        <a-entity cursor position="0 0 -1"
                  geometry="primitive: sphere; radius: 0.005"
                  material="color: #000000; shader: flat; opacity: 0.5"/>
      </a-camera>

      <a-box id="cloud_1" position="-50 14 -25" scale="10 2 5" opacity="0.5"
             animation="property:position; to: 50 14 -25; easing: linear; loop: true; dur: 90000"/>
      <a-box id="cloud_2" position="-50 10 -40" scale="7 1 3" opacity="0.7"
             animation="property:position; to: 50 10 -25; easing: linear; loop: true; dur: 80000"/>
      <a-box id="cloud_3" position="-52 8 -35" scale="3 1 1" opacity="0.7"
             animation="property:position; to: 50 10 -25; easing: linear; loop: true; dur: 60000"/>

      <a-box id="cloud_1" position="-100 20 -10" scale="10 2 3" opacity="0.5"
             animation="property:position; to: 80 14 -10; easing: linear; loop: true; dur: 90000"/>
      <a-box id="cloud_2" position="0 25 0" scale="4 2 3" opacity="0.3"
             animation="property:position; to: 100 10 0; easing: linear; loop: true; dur: 80000"/>
      <a-box id="cloud_3" position="-52 8 0" scale="7 2 4" opacity="0.9"
             animation="property:position; to:50 10 0; easing: linear; loop: true; dur: 60000"/>

      <a-plane
          id="landscape"
          height="1400"
          width="1400"
          position="0 -1 0"
          rotation="-90 0 0"
          :src="require('../assets/grass.jpg')"
          repeat="400 400"
      />

      <a-entity
          id="tree"
          position="-10 0 30"
          scale="2 2 2"
      >
        <a-box position="0 0 0" scale="1 5 1" :src="require('../assets/bark.jpg')"/>
        <a-box position="0 4 0" scale="4 6 4" :src="require('../assets/list.jpg')"/>
        <a-box position="2 4 1.2" scale="3 3 3" :src="require('../assets/list.jpg')"/>
        <a-box position="0 2.3 -2" scale="4 2 2" :src="require('../assets/list.jpg')"/>
        <a-box position="0 4 2.2" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"/>
        <a-box position="-1.5 6 2.2" scale="0.7 0.7 0.7" :src="require('../assets/apple.jpg')"/>
        <a-box position="-2 6 0" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"/>
        <a-box position="-2 3 -1" scale="0.7 0.7 0.7" :src="require('../assets/apple.jpg')"
               animation="property:position; to: -2 -0.3 -1; dur: 1000; delay: 10000"
               animation__2="property:rotation; to: 0 0 360; dur: 1000; delay: 10000"
        />
        <a-box position="-2 2 1" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"/>
        <a-box position="-2 2 1" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"/>
        <a-box position="2 2 -1" scale="0.3 0.3 0.3" color="brown"
               animation="property:position; to: 2 -0.34 -1; dur: 1500; delay: 100"
               animation__2="property:rotation; to: 360 0 360; dur: 1500; delay: 100"
        />
      </a-entity>

      <a-entity
          id="tree_2"
          position="-10 0 -30"
          scale="1 1 1"
      >
        <a-box position="0 0 0" scale="1 5 1" :src="require('../assets/bark.jpg')"/>
        <a-box position="0 4 0" scale="4 6 4" :src="require('../assets/list.jpg')"/>
        <a-box position="2 4 1.2" scale="3 3 3" :src="require('../assets/list.jpg')"/>
        <a-box position="0 4 2.2" scale="0.3 0.3 0.3" :src="require('../assets/apple.jpg')"/>
        <a-box position="-1.5 6 2.2" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"
               animation="property:position; to: -1.5 -0.8 2.2; dur: 1000; delay: 1000"
               animation__2="property:rotation; to: -360 0 360; dur: 1000; delay: 1000"
        />
        <a-box position="-2 6 0" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"/>
        <a-box position="-2 3 -1" scale="0.7 0.7 0.7" :src="require('../assets/apple.jpg')"/>
        <a-box position="-2 2 1" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"
               animation="property:position; to: -2 -0.8 1; dur: 1000; delay: 20000"
               animation__2="property:rotation; to: 360 0 360; dur: 1000; delay: 20000"
        />
        <a-box position="-2 2 1" scale="0.5 0.5 0.5" :src="require('../assets/apple.jpg')"/>
        <a-box position="2 2 -1" scale="0.8 0.8 0.8" :src="require('../assets/apple.jpg')"/>
      </a-entity>

      <a-entity
          id="tree_3"
          position="10 0 -15"
          scale="1 1 1"
      >
        <a-box position="0 0 0" scale="2 3 2" :src="require('../assets/bark.jpg')"/>
        <a-box position="0 5 0" scale="7 7 7" :src="require('../assets/list.jpg')"/>
      </a-entity>

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
  mounted() {
    const snowmanNose = document.querySelector('#snowman_6')
    snowmanNose.addEventListener('mouseenter', () => {
      snowmanNose.setAttribute('animation', 'property: position; to: 10 -3d -10')
      snowmanNose.setAttribute('animation__2', 'property: rotation; to: 180 0 0')
    })
   /* const cameraEl = document.querySelector('#camera')
    console.log(cameraEl)

    const box = document.querySelector('#box')
    function changeColor(color){
      box.setAttribute('color', color)
    }
    const setBlueColor = () => {changeColor('blue'), box.setAttribute('rotation', {x: 15, y: 30, z: 90})}

    box.addEventListener('mouseenter', () =>{
      document.addEventListener('wheel', setBlueColor)
      box.addEventListener('mouseleave', () =>{
        changeColor('green')
        document.removeEventListener('wheel', setBlueColor)
      })
    })*/
  }
})
</script>

<style lang="scss" scoped>

</style>
