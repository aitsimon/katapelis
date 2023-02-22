<script setup></script>

<template>
  <header>
    <div id="header-wrapper">
      <div id="logo-container">
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <nav id="nav">
        <div id="search-wrapper">
          <input type="search" />
          <div id="search-container">
            <svg
              id="search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
/* Mobile */
#header {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
}
#header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2% 5%;
}
#logo-container {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}
#logo-container:hover {
  transform: scale(1.1);
}
#logo {
  width: 90%;
  height: 45%;
}
#nav {
  width: 70%;
  display: flex;
  justify-content: flex-end;
}
#search-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#search-wrapper > input {
  width: 95%;
  height: 50%;
  border-radius: 15px;
  outline: none;
  border: none;
  font-size: larger;
  color: var(--pure-white);
  padding: 0% 1% 0% 2%;
  text-transform: lowercase;
  background-color: rgba(240, 248, 255, 0.129);
}
#search-container {
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#search {
  width: 95%;
  height: 95%;
}

/* Tablet */
#header {
  height: 5%;
}
#header-wrapper {
  padding: 0% 5%;
}
#logo-container {
  width: 10%;
  height: 10%;
}
#search-wrapper input {
  height: 25%;
}
#logo {
  width: 50%;
  height: 25%;
}
#search {
  width: 90%;
  height: 50%;
}
#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
