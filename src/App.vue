<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title
        :title="site.title"
      />
      <v-spacer/>
      <site-sign />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="400">
      <site-menu
        :items="site.menu"
      />
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <site-footer
      :footer="site.footer"
    />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'
import SiteSign from '@/views/site/sign'

export default {
  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu,
    SiteSign

  },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {
        menu: [
          {
            title: 'Home',
            icon: 'mdi-home',
            subItems: [
              {
                title: 'Dashboard',
                to: '/'
              },
              {
                title: 'About',
                to: '/about'
              }
            ]
          },
          {
            title: 'Account',
            icon: 'mdi-account',
            active: true,
            subItems: [
              {
                title: 'Dashboard',
                to: '/'
              }
            ]
          }
        ],
        title: 'TITLE',
        footer: 'FOOTER'
      }

    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
          return
        }
        this.site = v
      }, (e) => {
        console.log(e.message)
      })
    }
  }
}
</script>
