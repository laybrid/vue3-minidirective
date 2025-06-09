<template>
    <div class="book-container">
        <h1 v-i18n="{ en: 'The Little Prince', zh: '小王子', fr: 'Le Petit Prince' }"></h1>

        <p class="author" v-i18n="{
            en: 'By Antoine de Saint-Exupéry',
            zh: '作者：安托万·德·圣-埃克苏佩里',
            fr: 'Par Antoine de Saint-Exupéry'
        }"></p>

        <div style="margin-top: 20px; text-align: left;">
            <p v-i18n="{
                en: 'Once upon a time, there was a little prince.',
                zh: '从前，有一个小王子。',
                fr: 'Il était une fois un petit prince.'
            }"></p>
            <p v-i18n="{
                en: 'He lived on a planet that was barely any bigger than himself.',
                zh: '他住在一个几乎和他一样大的星球上。',
                fr: 'Il vivait sur une planète à peine plus grande que lui.'
            }"></p>
        </div>

        <div class="language-switcher">
            <button @click="setLanguage('en')">English</button>
            <button @click="setLanguage('zh')">中文</button>
            <button @click="setLanguage('fr')">Français</button>
            <span>当前语言：{{ currentLanguage }}</span>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useLanguage } from '../../src/i18n/index'
const { currentLanguage, setLanguage } = useLanguage()
</script>


<style scoped>
.book-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: #f9f5e7;
    border: 2px solid #d4af37;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Georgia', serif;
    text-align: center;
    color: #8b4513;
    font-style: italic;
}

button {
    margin: 0 5px;
    padding: 10px 20px;
    background: #d4af37;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

button:hover {
    background: #b8860b;
}
</style>