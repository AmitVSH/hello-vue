<template>
  <div id="app">
    <div id="nav">
        <router-link class="nav_link" to="/">Home</router-link>
        <router-link class="nav_link" to="/about">About</router-link>
        <router-link class="nav_link" to="/welcome">Welcome</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
body {
margin:0px;
padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Prompt', sans-serif;
}

#nav {
  padding: 30px;
  background-color: #c3ebcf;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav_link {
  background-color: #fff;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px;
  text-decoration: none;
}
</style>
