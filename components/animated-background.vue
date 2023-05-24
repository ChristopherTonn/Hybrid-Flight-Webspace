<template>
  <div class="animated-background">
    <!-- Hier können Sie den Inhalt Ihrer Komponente platzieren -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Fügen Sie hier den Code für die Animation hinzu
  },
};
</script>

<style>
.animated-background {
  /* Hier können Sie die gewünschten Stile für den Hintergrund festlegen */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: -10;
  animation: myAnimation 20s infinite;
}

@keyframes myAnimation {
  0% {
    /* Stil des Hintergrunds zu Beginn der Animation */
    opacity: 0.1;
  }

  25% {
    opacity: 0.5;
  }

  50% {
    /* Stil des Hintergrunds in der Mitte der Animation */
    opacity: 1;
  }

  75% {
    opacity: 0.5;
  }

  100% {
    /* Stil des Hintergrunds am Ende der Animation */
    opacity: 0.1;
  }
}
</style>
