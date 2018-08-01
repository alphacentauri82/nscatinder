<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Catinder">
        </ActionBar>
        <StackLayout class="hello-world">
            <StackLayout class="hello-world" height="45%">
                <Image :src="image" @touch="addImage()" height="80%"/>
                <StackLayout orientation="horizontal" >
                    <Button text="Next" @tap="position++"/>
                    <Button :text="'Count: ' + listSize"/>
                </StackLayout>
            </StackLayout>
            <ScrollView orientation="horizontal" height="45%">
                <StackLayout orientation="horizontal">
                    <StackLayout v-for="(item, index) in listImage" :key="index">
                        <Image :src="item.src" height="80%"/>
                        <Button text="Remove" @tap="removeImage(index)"/>
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </Page>
</template>

<script>

  export default {
    data () {
      return {
        position: 0,
        listImage: []
      }
    },
    methods: {
      addImage () {
        let me = this
        let url = me.image
        let finder = this.listImage.filter(item => item.src === url)
        if (finder.length === 0) {
          this.listImage.push({
            id: me.position,
            src: url
          })
        }
      },
      removeImage (index) {
        this.listImage.splice(index, 1)
      }
    },
    computed: {
      image () {
        return 'http://thecatapi.com/api/images/get?' + this.position
      },
      listSize () {
        return this.listImage.length
      }
    }
  }
</script>

<style scoped>
    .hello-world {
        margin: 2;
    }

    Label {
        color: red;
    }
</style>
