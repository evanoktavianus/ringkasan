<template>
  <div class="holder">
    <div class="blob"></div>
    <div>
      <h5>Live Update: </h5>
    </div>
    <div>
      <h5>  {{ now }} </h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    now() {
      var today = new Date();
      var date = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear()
      return date;
    }
  }
};
</script>
<style scoped>
.holder {
  display: flex;
  align-items: center;
}
.blob {
  background: red;
  border-radius: 50%;
  margin: 10px;
  height: 20px;
  width: 20px;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
