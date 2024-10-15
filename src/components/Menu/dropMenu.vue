<script setup></script>

<template>
  <div class="header">
    <nav>
      <ul id="main-menu">
        <li>
          <a href="">CSS</a>
          <ul class="sub-menu">
            <li><a href="">Menu 2.1</a></li>
            <li>
              <a href="">Menu 2.2</a>
              <ul class="sub-menu">
                <li><a href="">Menu 2.2.1</a></li>
                <li><a href="">Menu 2.2.2</a></li>
                <li><a href="">Menu 2.2.3</a></li>
                <li><a href="">Menu 2.2.4</a></li>
              </ul>
            </li>
            <li><a href="">Menu 2.3</a></li>
            <li><a href="">Menu 2.4</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#main-menu li {
  position: relative;
}
#main-menu li a {
  color: red;
  display: block;
  padding: 18px 20px;
  text-decoration: none;
}

#main-menu ul.sub-menu {
  display: none;
  position: absolute;
  background-color: #000;
  padding: 15px 0px;
  width: 200px;
  border: 1px solid white;
  left: 100px;
  top: 0;
}
#main-menu li:hover > ul.sub-menu {
  display: block;
}

#main-menu ul.sub-menu a {
  left: 0px;
  padding: 8px 15px;
  border-bottom: 1px solid white;
}
#main-menu ul.sub-menu li:hover > a {
  border-bottom: 1px solid orange;
}
#main-menu ul.sub-menu li:last-child a {
  border: none;
}
#main-menu ul.sub-menu ul.sub-menu {
  left: 199px;
  top: -15px;
}
</style>
