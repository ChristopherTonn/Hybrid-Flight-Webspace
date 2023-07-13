<template></template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Hero',
});
</script>
<style module>
.frameChild {
  position: relative;
  border-top: 2px solid var(--black);
  box-sizing: border-box;
  width: 3.13rem;
  height: 0.13rem;
}
.lineWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.hybridFlight {
  position: relative;
  letter-spacing: 0.01em;
  line-height: 5.38rem;
  font-weight: 800;
  display: inline-block;
  width: 48.06rem;
  height: 7.81rem;
  flex-shrink: 0;
}
.emotionalDancefloorAtmosphr {
  position: relative;
  font-size: var(--font-size-107xl);
  letter-spacing: 0.01em;
  line-height: 7.88rem;
  font-weight: 800;
  display: inline-block;
  width: 82.25rem;
  height: 19rem;
  flex-shrink: 0;
  -webkit-text-stroke: 2px #fff;
}
.button {
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 1.5rem;
  font-weight: 600;
  font-family: var(--font-cairo);
  color: var(--white);
  text-align: left;
}
.northEastIcon {
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
}
.buttonprimaryactive1 {
  border-radius: var(--br-11xl);
  background-color: var(--black);
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  padding: var(--padding-lg) var(--padding-21xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
}
.buttonprimaryactive {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.hybridFlightParent {
  height: 34.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frameParent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
}
.header {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.hero {
  position: absolute;
  top: 5.75rem;
  left: 0rem;
  width: 90rem;
  display: flex;
  flex-direction: column;
  padding: var(--padding-77xl) 0rem 0rem var(--padding-131xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-53xl);
  color: var(--black);
  font-family: var(--font-cairo);
}
</style>
