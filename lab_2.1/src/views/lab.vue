<template>
  <div class="laba-block">
    <a-scene>
      <a-camera id="camera">
        <a-sky color="#262626"/>
        <a-entity cursor position="0 0 -1"
                  geometry="primitive: sphere; radius: 0.005"
                  material="color: #000000; shader: flat; opacity: 0.5"/>
      </a-camera>

      <a-entity
                rotation="0 0 0"
                position="0 20 -15"
                animation="property: rotation; to: 0 0 360; easing: linear; loop: true; dur: 10000; dir:alternate">
        <a-sphere id="sun_1" position="0 0 -15" scale="2 2 2" color="orange"/>
        <a-cone id="sun_2" position="0 4 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="0 0 0"/>
        <a-cone id="sun_3" position="-4 0 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="0 0 90"/>
        <a-cone id="sun_4" position="4 0 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="0 0 -90"/>
        <a-cone id="sun_5" position="0 -4 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="180 0 0"/>
        <a-cone id="sun_6" position="-3 -3 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="180 0 45"/>
        <a-cone id="sun_7" position="3 -3 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="180 0 -45"/>
        <a-cone id="sun_8" position="3 3 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="0 0 -45"/>
        <a-cone id="sun_9" position="-3 3 -15" color="orange"
                radius-bottom="0.6" radius-top="0" height="2.5"
                rotation="0 0 45"/>
      </a-entity>

      <a-text id="snowman_0" position="8.5 10 -15" scale="2 2 2"
          value="Touch the nose :^"/>
      <a-sphere id="snowman_1" position="10 0 -15" scale="3.2 3.2 3.2" color="#FAFAFA"/>
      <a-sphere id="snowman_2" position="10 4 -15" scale="2.5 2.5 2.5" color="#FAFAFA"/>
      <a-sphere id="snowman_3" position="10 7 -15" scale="1.5 1.5 1.5" color="#FAFAFA"/>
      <a-sphere id="snowman_4" position="10.46 7.1 -13.6" scale="0.2 0.2 0.2" color="#000"/>
      <a-sphere id="snowman_5" position="9.54 7.1 -13.6" scale="0.2 0.2 0.2" color="#000"/>
      <a-cone id="snowman_6" position="10 6.7 -13.3" color="orange"
              radius-bottom="0.5" radius-top="0" height="3"
              rotation="90 0 0"/>

      <a-box id="cloud_1" position="-20 14 -25" scale="10 2 5" opacity="0.5"
             animation="property:position; to: 20 14 -25; easing: linear; loop: true; dur: 50000"/>
      <a-box id="cloud_2" position="-10 10 -40" scale="7 1 3" opacity="0.7"
             animation="property:position; to: 20 10 -25; easing: linear; loop: true; dur: 60000"/>
      <a-box id="cloud_3" position="-12 8 -35" scale="3 1 1" opacity="0.7"
             animation="property:position; to: 20 10 -25; easing: linear; loop: true; dur: 70000"/>

      <a-entity
          id="tree"
          position="-10 0 -30"
          scale="1 1 1"
          animation="property:scale; to: 1.7 1.7 1.7; delay: 2500"
      >
        <a-box position="0 0 0" scale="1 5 1" color="#3D2B1F"/>
        <a-box position="0 4 0" scale="4 6 4" color="#0BDA51"/>
        <a-box position="2 4 1.2" scale="3 3 3" color="#0BDA51"/>
        <a-box position="0 2.3 -2" scale="4 2 2" color="#0BDA51"/>
        <a-box position="0 4 2.2" scale="0.5 0.5 0.5" color="red"/>
        <a-box position="-1.5 6 2.2" scale="0.5 0.5 0.5" color="red"/>
        <a-box position="-2 6 0" scale="0.5 0.5 0.5" color="red"/>
        <a-box position="-2 3 -1" scale="0.5 0.5 0.5" color="red"/>
        <a-box position="-2 2 1" scale="0.5 0.5 0.5" color="red"/>
        <a-box position="-2 2 1" scale="0.5 0.5 0.5" color="red"/>
        <a-box position="2 2 -1" scale="0.5 0.5 0.5" color="red"/>
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
import Vue from 'vue'

require('aframe');


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
